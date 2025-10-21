package com.ProjetSatge.HR.Platform.Controllers;


import com.ProjetSatge.HR.Platform.Entities.Role;
import com.ProjetSatge.HR.Platform.Services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    // GET /api/roles
    @GetMapping
    public List<Role> getAllRoles() {
        return roleService.findAll();
    }

    // GET /api/roles/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable Long id) {
        Optional<Role> role = roleService.findById(id);
        return role.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // POST /api/roles
    @PostMapping
    public Role createRole(@RequestBody Role role) {
        return roleService.save(role);
    }

    // PUT /api/roles/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Role> updateRole(@PathVariable Long id, @RequestBody Role roleDetails) {
        Optional<Role> roleOptional = roleService.findById(id);
        if (!roleOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        Role role = roleOptional.get();
        role.setName(roleDetails.getName());
        return ResponseEntity.ok(roleService.save(role));
    }

    // DELETE /api/roles/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRole(@PathVariable Long id) {
        if (!roleService.findById(id).isPresent()) {
            return ResponseEntity.status(404).body("Rôle non trouvé");
        }
        roleService.deleteById(id);
        return ResponseEntity.ok("Rôle supprimé avec succès");
    }
}
