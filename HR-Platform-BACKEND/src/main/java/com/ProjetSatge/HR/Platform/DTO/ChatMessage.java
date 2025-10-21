package com.ProjetSatge.HR.Platform.DTO;

import lombok.Data;

@Data
public class ChatMessage {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ChatMessage(String message) {
        this.message = message;
    }
}
