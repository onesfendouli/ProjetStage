package com.ProjetSatge.HR.Platform.Entities.chatBot;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data



public class ChatIntent {
    private String intentId;
    private String name;
    private List<String> patterns;
    private List<String> responses;
    private List<String> followUpQuestions;
    private String context;
    private boolean requiresAuth;

    public ChatIntent(String intentId, String name, List<String> patterns, List<String> responses, List<String> followUpQuestions, String context, boolean requiresAuth) {
        this.intentId = intentId;
        this.name = name;
        this.patterns = patterns;
        this.responses = responses;
        this.followUpQuestions = followUpQuestions;
        this.context = context;
        this.requiresAuth = requiresAuth;
    }

    public String getIntentId() {
        return intentId;
    }

    public void setIntentId(String intentId) {
        this.intentId = intentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getPatterns() {
        return patterns;
    }

    public void setPatterns(List<String> patterns) {
        this.patterns = patterns;
    }

    public List<String> getResponses() {
        return responses;
    }

    public void setResponses(List<String> responses) {
        this.responses = responses;
    }

    public List<String> getFollowUpQuestions() {
        return followUpQuestions;
    }

    public void setFollowUpQuestions(List<String> followUpQuestions) {
        this.followUpQuestions = followUpQuestions;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public boolean isRequiresAuth() {
        return requiresAuth;
    }

    public void setRequiresAuth(boolean requiresAuth) {
        this.requiresAuth = requiresAuth;
    }

    public ChatIntent() {
    }
}