package com.ProjetSatge.HR.Platform.Services;

import com.ProjetSatge.HR.Platform.Entities.Demande;
import com.ProjetSatge.HR.Platform.Repositories.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeService {
    @Autowired
    private DemandeRepository demandeRepository;

    public Demande save(Demande demande) {
        return demandeRepository.save(demande);
    }

    public List<Demande> findAll() {
        return demandeRepository.findAll();
    }

    public Optional<Demande> findById(Long id) {
        return demandeRepository.findById(id);
    }

    public void delete(Long id) {
        demandeRepository.deleteById(id);
    }
}
