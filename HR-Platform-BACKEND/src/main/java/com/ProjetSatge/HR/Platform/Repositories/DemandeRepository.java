package com.ProjetSatge.HR.Platform.Repositories;

import com.ProjetSatge.HR.Platform.Entities.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemandeRepository extends JpaRepository<Demande, Long> {

    List<Demande> findByUserId(Long userId);
    List<Demande> findByJobOfferId(Long jobOfferId);
}

