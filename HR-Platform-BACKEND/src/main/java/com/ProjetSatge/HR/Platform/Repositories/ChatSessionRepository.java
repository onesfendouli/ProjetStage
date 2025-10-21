package com.ProjetSatge.HR.Platform.Repositories;


import com.ProjetSatge.HR.Platform.Entities.chatBot.ChatSession;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class ChatSessionRepository {
    private final Map<String, ChatSession> sessions = new HashMap<>();

    public ChatSession getSessionByUserId(String userId) {
        return sessions.get(userId);
    }

    public void save(ChatSession session) {
        sessions.put(session.getUserId(), session);
    }
}