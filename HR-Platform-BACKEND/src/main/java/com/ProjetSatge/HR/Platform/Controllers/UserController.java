package com.ProjetSatge.HR.Platform.Controllers;

import com.ProjetSatge.HR.Platform.Entities.Role;
import com.ProjetSatge.HR.Platform.Entities.User;
import com.ProjetSatge.HR.Platform.Services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // GET /api/users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    // GET /api/users/{id}
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        Optional<User> user = userService.findById(id);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST /api/users
    @PostMapping
    public User createUser(@RequestBody User user) {

        return userService.save(user);
    }

    // PUT /api/users/{id}
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails) {
        Optional<User> userOptional = userService.findById(id);
        if (!userOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        User user = userOptional.get();
        user.setFirstname(userDetails.getFirstname());
        user.setLastname(userDetails.getLastname());
        user.setDateOfBirth(userDetails.getDateOfBirth());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        User updatedUser = userService.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    // DELETE /api/users/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
        if (!userService.findById(id).isPresent()) {
            return ResponseEntity.status(404).body("Utilisateur non trouvé");
        }

        userService.deleteById(id);

        return ResponseEntity.ok("Utilisateur supprimé avec succès");
    }


    @GetMapping("/profile")
    public String getUserProfile(HttpServletRequest request) {
        // Récupération de l'id utilisateur stocké dans la requête par le filtre JWT
        String userId = (String) request.getAttribute("userId");
        if (userId == null) {
            return "Utilisateur non authentifié";
        }

        // Ici tu peux utiliser userId pour récupérer les infos en base, etc.
        return "Profil utilisateur avec ID = " + userId;
    }

}








