package com.ProjetSatge.HR.Platform.Repositories;

import com.ProjetSatge.HR.Platform.Entities.Interview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterviewRepository extends JpaRepository<Interview, Long> {
}
