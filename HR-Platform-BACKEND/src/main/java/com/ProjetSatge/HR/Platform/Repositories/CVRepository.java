package com.ProjetSatge.HR.Platform.Repositories;

import com.ProjetSatge.HR.Platform.Entities.CV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CVRepository extends JpaRepository<CV, Long> {
}

