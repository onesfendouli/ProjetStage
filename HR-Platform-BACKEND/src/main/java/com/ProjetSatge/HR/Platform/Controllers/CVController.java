package com.ProjetSatge.HR.Platform.Controllers;

import com.ProjetSatge.HR.Platform.Entities.CV;
import com.ProjetSatge.HR.Platform.Services.CVService;
import org.springframework.core.io.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cvs")
public class CVController {

    @Autowired
    private CVService cvService;

    // ✅ Upload d’un fichier CV
    @PostMapping("/upload")
    public ResponseEntity<CV> uploadCV(@RequestParam("file") MultipartFile file) {
        try {
            CV savedCV = cvService.save(file);
            return ResponseEntity.ok(savedCV);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // ✅ Télécharger ou afficher un fichier CV
    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> downloadCV(@PathVariable Long id) {
        Optional<CV> optionalCV = cvService.findById(id);
        if (optionalCV.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        CV cv = optionalCV.get();
        Path path = Paths.get(cv.getFilePath());

        try {
            Resource resource = (Resource) new UrlResource(path.toUri());
            if (!resource.exists()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION,
                            "inline; filename=\"" + path.getFileName().toString() + "\"")
                    .body(resource);
        } catch (MalformedURLException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // ✅ Liste des CVs
    @GetMapping
    public ResponseEntity<List<CV>> getAll() {
        return ResponseEntity.ok(cvService.findAll());
    }

    // ✅ Obtenir un CV par ID
    @GetMapping("/{id}")
    public ResponseEntity<CV> getById(@PathVariable Long id) {
        return cvService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Supprimer un CV
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cvService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
