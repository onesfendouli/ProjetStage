package com.ProjetSatge.HR.Platform.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Demande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate appliedAt;
    private String status;

    @ManyToOne
    @JoinColumn(name = "job_offer_id")
    private JobOffer jobOffer;




    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "cv_id")
    private CV cv;



    @OneToMany(mappedBy = "demande")
    private List<Interview> interviews;

}

