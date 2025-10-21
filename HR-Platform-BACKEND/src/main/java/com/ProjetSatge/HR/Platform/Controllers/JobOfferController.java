package com.ProjetSatge.HR.Platform.Controllers;

import com.ProjetSatge.HR.Platform.Entities.JobOffer;
import com.ProjetSatge.HR.Platform.Services.JobOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-offers")
public class JobOfferController {

    @Autowired
    private JobOfferService jobOfferService;

    @PostMapping
    public ResponseEntity<JobOffer> createJobOffer(@RequestBody JobOffer jobOffer) {
        JobOffer savedOffer = jobOfferService.save(jobOffer);
        return ResponseEntity.ok(savedOffer);
    }

    @GetMapping
    public ResponseEntity<List<JobOffer>> getAllOffers() {
        return ResponseEntity.ok(jobOfferService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobOffer> getOfferById(@PathVariable Long id) {
        return jobOfferService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOffer(@PathVariable Long id) {
        jobOfferService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

