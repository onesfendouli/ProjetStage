package com.ProjetSatge.HR.Platform.Repositories;

import com.ProjetSatge.HR.Platform.Entities.JobOffer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer, Long> {
}
