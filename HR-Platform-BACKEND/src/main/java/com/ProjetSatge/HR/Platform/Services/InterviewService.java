package com.ProjetSatge.HR.Platform.Services;

import com.ProjetSatge.HR.Platform.Entities.Demande;
import com.ProjetSatge.HR.Platform.Entities.Interview;
import com.ProjetSatge.HR.Platform.Repositories.DemandeRepository;
import com.ProjetSatge.HR.Platform.Repositories.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    @Autowired
    private DemandeRepository demandeRepository;

    public Interview createInterview(Long demandeId, Interview interview) {
        Demande demande = demandeRepository.findById(demandeId)
                .orElseThrow(() -> new RuntimeException("Demande not found"));

        interview.setDemande(demande);
        interview.setStatus("PENDING"); // default
        return interviewRepository.save(interview);
    }

    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }

    public Interview getInterviewById(Long id) {
        return interviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Interview not found"));
    }

    public Interview updateInterview(Long id, Interview updated) {
        Interview existing = getInterviewById(id);
        existing.setDate(updated.getDate());
        existing.setLocation(updated.getLocation());
        existing.setStatus(updated.getStatus());
        return interviewRepository.save(existing);
    }

    public void deleteInterview(Long id) {
        interviewRepository.deleteById(id);
    }
}
