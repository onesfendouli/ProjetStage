package com.ProjetSatge.HR.Platform.Controllers;


import com.ProjetSatge.HR.Platform.Config.JwtUtil;
import com.ProjetSatge.HR.Platform.Entities.User;
import com.ProjetSatge.HR.Platform.Repositories.UserRepository;
import com.ProjetSatge.HR.Platform.Services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {
        authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        return jwtUtil.generateToken(request.getEmail());
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        String code = String.format("%06d", new Random().nextInt(1000000));
        user.setVerificationCode(code);
        user.setVerificationExpiresAt(LocalDateTime.now().plusMinutes(15));
        user.setEnabled(false);
        userRepository.save(user);
        String html = emailService.buildVerificationEmail(user.getFirstname() != null ? user.getFirstname() : user.getEmail(), code);
        emailService.sendHtml(user.getEmail(), "Verify your HR Platform account", html);
        return "Inscription réussie. Vérifiez votre email pour le code.";
    }

    @PostMapping("/verify")
    public String verify(@RequestParam String email, @RequestParam String code) {
        Optional<User> opt = userRepository.findByEmail(email);
        if (opt.isEmpty()) return "Utilisateur introuvable";
        User user = opt.get();
        if (user.getVerificationCode() != null && user.getVerificationCode().equals(code)
                && user.getVerificationExpiresAt() != null && user.getVerificationExpiresAt().isAfter(LocalDateTime.now())) {
            user.setEnabled(true);
            user.setVerificationCode(null);
            user.setVerificationExpiresAt(null);
            userRepository.save(user);
            return "Compte vérifié";
        }
        return "Code invalide ou expiré";
    }

    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestParam String email) {
        Optional<User> opt = userRepository.findByEmail(email);
        if (opt.isEmpty()) return "Si un compte existe, un email a été envoyé.";
        User user = opt.get();
        String code = String.format("%06d", new Random().nextInt(1000000));
        user.setResetCode(code);
        user.setResetExpiresAt(LocalDateTime.now().plusMinutes(15));
        userRepository.save(user);
        String html = emailService.buildResetEmail(user.getFirstname() != null ? user.getFirstname() : user.getEmail(), code);
        emailService.sendHtml(user.getEmail(), "Reset your HR Platform password", html);
        return "Si un compte existe, un email a été envoyé.";
    }

    public static class ResetRequest {
        private String email;
        private String code;
        private String newPassword;
        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
        public String getCode() { return code; }
        public void setCode(String code) { this.code = code; }
        public String getNewPassword() { return newPassword; }
        public void setNewPassword(String newPassword) { this.newPassword = newPassword; }
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody ResetRequest req) {
        Optional<User> opt = userRepository.findByEmail(req.getEmail());
        if (opt.isEmpty()) return "Utilisateur introuvable";
        User user = opt.get();
        if (user.getResetCode() != null && user.getResetCode().equals(req.getCode())
                && user.getResetExpiresAt() != null && user.getResetExpiresAt().isAfter(LocalDateTime.now())) {
            user.setPassword(passwordEncoder.encode(req.getNewPassword()));
            user.setResetCode(null);
            user.setResetExpiresAt(null);
            userRepository.save(user);
            return "Mot de passe réinitialisé";
        }
        return "Code invalide ou expiré";
    }

    // Classe interne pour la requête d'authentification
    public static class AuthRequest {
        private String email;  // remplacé username par email
        private String password;

        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}
