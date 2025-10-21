package com.ProjetSatge.HR.Platform.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity

public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;

    private LocalDate createdAt;

    @Enumerated(EnumType.STRING)
    private JobType jobType;   // Exemple : FULL_TIME, PART_TIME, INTERNSHIP

    @Enumerated(EnumType.STRING)
    private JobStatus status;  // Exemple : OPEN, CLOSED


    // Constructors
    public JobOffer() {
        this.createdAt = LocalDate.now();
        this.status = JobStatus.OPEN;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public JobType getJobType() {
        return jobType;
    }

    public void setJobType(JobType jobType) {
        this.jobType = jobType;
    }

    public JobStatus getStatus() {
        return status;
    }

    public void setStatus(JobStatus status) {
        this.status = status;
    }


    @OneToMany(mappedBy = "jobOffer")
    @JsonIgnore
    private List<Demande> demandes;


}
