package com.ProjetSatge.HR.Platform.Controllers;


import com.ProjetSatge.HR.Platform.DTO.ChatMessage;
import com.ProjetSatge.HR.Platform.Entities.chatBot.ChatResponse;
import com.ProjetSatge.HR.Platform.Services.ChatbotService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chatbot")
public class ChatbotController {

    @Autowired
    private ChatbotService chatbotService;

    @PostMapping("/message")
    public ChatResponse sendMessage(@RequestBody ChatMessage message, HttpServletRequest request) {
        // Récupérer userId depuis JWT (extrait dans security filter) ou null si pas connecté
        String userId = (String) request.getAttribute("userId"); // à adapter selon ton filtre JWT

        return chatbotService.handleMessage(userId, message.getMessage());
    }
}