package com.ProjetSatge.HR.Platform.Services;

import com.ProjetSatge.HR.Platform.Entities.JobOffer;
import com.ProjetSatge.HR.Platform.Repositories.JobOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobOfferService {

    @Autowired
    private JobOfferRepository jobOfferRepository;

    public JobOffer save(JobOffer jobOffer) {
        return jobOfferRepository.save(jobOffer);
    }

    public List<JobOffer> getAll() {
        return jobOfferRepository.findAll();
    }

    public Optional<JobOffer> getById(Long id) {
        return jobOfferRepository.findById(id);
    }

    public void delete(Long id) {
        jobOfferRepository.deleteById(id);
    }
}

