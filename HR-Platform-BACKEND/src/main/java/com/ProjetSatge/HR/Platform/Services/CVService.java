package com.ProjetSatge.HR.Platform.Services;

import com.ProjetSatge.HR.Platform.Entities.CV;
import com.ProjetSatge.HR.Platform.Repositories.CVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CVService {

    @Autowired
    private CVRepository cvRepository;

    private final String uploadDir = "uploads/cvs";

    public CV save(MultipartFile file) throws IOException {
        // Créer le dossier si nécessaire
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        // Générer nom unique
        String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir, fileName);

        // Copier le fichier
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        // Créer l'objet CV
        CV cv = new CV();
        cv.setFilePath(filePath.toString());

        return cvRepository.save(cv);
    }

    public Optional<CV> findById(Long id) {
        return cvRepository.findById(id);
    }

    public List<CV> findAll() {
        return cvRepository.findAll();
    }

    public void delete(Long id) {
        cvRepository.deleteById(id);
    }
}

