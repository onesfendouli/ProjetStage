package com.ProjetSatge.HR.Platform.Controllers;

import com.ProjetSatge.HR.Platform.Entities.Demande;
import com.ProjetSatge.HR.Platform.Services.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/demandes")
public class DemandeController {

    @Autowired
    private DemandeService demandeService;

    @PostMapping
    public ResponseEntity<Demande> create(@RequestBody Demande demande) {
        return ResponseEntity.ok(demandeService.save(demande));
    }

    @GetMapping
    public ResponseEntity<List<Demande>> getAll() {
        return ResponseEntity.ok(demandeService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Demande> getById(@PathVariable Long id) {
        return demandeService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        demandeService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
