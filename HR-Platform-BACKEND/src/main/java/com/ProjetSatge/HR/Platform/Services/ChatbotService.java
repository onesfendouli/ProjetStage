package com.ProjetSatge.HR.Platform.Services;


import com.ProjetSatge.HR.Platform.Entities.User;
import com.ProjetSatge.HR.Platform.Entities.chatBot.ChatIntent;
import com.ProjetSatge.HR.Platform.Entities.chatBot.ChatResponse;
import com.ProjetSatge.HR.Platform.Entities.chatBot.ChatSession;
import com.ProjetSatge.HR.Platform.Repositories.ChatSessionRepository;
import com.ProjetSatge.HR.Platform.Repositories.UserRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Stack;
import java.util.UUID;

@Service
public class ChatbotService {

    private List<ChatIntent> intents;

    @Autowired
    private ChatSessionRepository chatSessionRepository;

    @Autowired
    private UserRepository userRepository;

    public ChatbotService() throws IOException {
        loadIntents();
    }

    private void loadIntents() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        intents = mapper.readValue(new ClassPathResource("intents.json").getFile(),
                new TypeReference<List<ChatIntent>>() {});
    }

    public ChatResponse handleMessage(String userId, String message) {
        User user = null;
        if (userId != null) {
            user = userRepository.findById(Integer.valueOf(userId)).orElse(null);
        }

        ChatSession session = chatSessionRepository.getSessionByUserId(userId);
        if (session == null) {
            session = new ChatSession();
            session.setSessionId(UUID.randomUUID().toString());
            session.setUserId(userId);
            session.setContextStack(new Stack<>());
            session.setLastActivity(LocalDateTime.now());
            session.setCurrentIntent(null);
            session.setAwaitingFollowUp(false);
        }

        // Simple matching intent par patterns
        ChatIntent matchedIntent = null;
        String lowerMsg = message.toLowerCase();

        for (ChatIntent intent : intents) {
            for (String pattern : intent.getPatterns()) {
                if (lowerMsg.contains(pattern.toLowerCase())) {
                    matchedIntent = intent;
                    break;
                }
            }
            if (matchedIntent != null) break;
        }

        if (matchedIntent == null) {
            return new ChatResponse("Désolé, je n'ai pas compris votre demande.", List.of(), "unknown",
                    LocalDateTime.now(), false, "None");
        }

        if (matchedIntent.isRequiresAuth() && user == null) {
            return new ChatResponse("Vous devez être connecté pour accéder à cette information.", List.of(),
                    matchedIntent.getIntentId(), LocalDateTime.now(), false, "None");
        }

        // Exemple réponse statique, tu peux personnaliser selon l'intent et le contexte
        String responseText = matchedIntent.getResponses().get(0);
        List<String> suggestions = matchedIntent.getFollowUpQuestions();

        // Mise à jour session
        session.setCurrentIntent(matchedIntent.getIntentId());
        session.setLastActivity(LocalDateTime.now());
        chatSessionRepository.save(session);

        return new ChatResponse(responseText, suggestions, matchedIntent.getIntentId(),
                LocalDateTime.now(), false, "None");
    }
}