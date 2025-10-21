package com.ProjetSatge.HR.Platform.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendHtml(String to, String subject, String html) {
        try {
            var mimeMessage = mailSender.createMimeMessage();
            var helper = new MimeMessageHelper(mimeMessage, "UTF-8");
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(html, true);
            mailSender.send(mimeMessage);
        } catch (Exception e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }

    public String buildVerificationEmail(String userName, String code) {
        return "<!DOCTYPE html>" +
                "<html><head><meta charset=\"UTF-8\" />" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
                "<style>body{background:#0f172a;margin:0;font-family:Arial,Helvetica,sans-serif;color:#e2e8f0} .card{max-width:560px;margin:24px auto;background:#111827;border:1px solid #1f2937;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.4)} .header{background:linear-gradient(135deg,#06b6d4,#3b82f6);padding:24px;color:#fff} .title{margin:0;font-size:20px;font-weight:700} .content{padding:24px;line-height:1.6} .code{display:inline-block;padding:12px 20px;background:#0ea5e9;color:#0f172a;border-radius:8px;font-size:24px;letter-spacing:4px;font-weight:800} .muted{color:#94a3b8;font-size:12px;margin-top:16px} .footer{padding:16px 24px;border-top:1px solid #1f2937;color:#94a3b8;font-size:12px}</style>" +
                "</head><body><div class=\"card\">" +
                "<div class=\"header\"><h1 class=\"title\">Verify your account</h1></div>" +
                "<div class=\"content\">" +
                "<p>Hi " + escape(userName) + ",</p>" +
                "<p>Use the code below to verify your email address and activate your account.</p>" +
                "<p><span class=\"code\">" + escape(code) + "</span></p>" +
                "<p class=\"muted\">This code will expire in 15 minutes. If you didn't request this, you can safely ignore this email.</p>" +
                "</div><div class=\"footer\">HR Platform</div></div></body></html>";
    }

    public String buildResetEmail(String userName, String code) {
        return "<!DOCTYPE html>" +
                "<html><head><meta charset=\"UTF-8\" />" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />" +
                "<style>body{background:#0f172a;margin:0;font-family:Arial,Helvetica,sans-serif;color:#e2e8f0} .card{max-width:560px;margin:24px auto;background:#111827;border:1px solid #1f2937;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.4)} .header{background:linear-gradient(135deg,#f59e0b,#ef4444);padding:24px;color:#fff} .title{margin:0;font-size:20px;font-weight:700} .content{padding:24px;line-height:1.6} .code{display:inline-block;padding:12px 20px;background:#f59e0b;color:#111827;border-radius:8px;font-size:24px;letter-spacing:4px;font-weight:800} .muted{color:#94a3b8;font-size:12px;margin-top:16px} .footer{padding:16px 24px;border-top:1px solid #1f2937;color:#94a3b8;font-size:12px}</style>" +
                "</head><body><div class=\"card\">" +
                "<div class=\"header\"><h1 class=\"title\">Reset your password</h1></div>" +
                "<div class=\"content\">" +
                "<p>Hi " + escape(userName) + ",</p>" +
                "<p>Use the code below to reset your password.</p>" +
                "<p><span class=\"code\">" + escape(code) + "</span></p>" +
                "<p class=\"muted\">This code will expire in 15 minutes. If you didn't request this, you can safely ignore this email.</p>" +
                "</div><div class=\"footer\">HR Platform</div></div></body></html>";
    }

    private String escape(String s) {
        if (s == null) return "";
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;");
    }
}


