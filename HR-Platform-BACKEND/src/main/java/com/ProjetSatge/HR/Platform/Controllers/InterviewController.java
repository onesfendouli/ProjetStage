package com.ProjetSatge.HR.Platform.Controllers;

import com.ProjetSatge.HR.Platform.Entities.Interview;
import com.ProjetSatge.HR.Platform.Services.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interviews")
@CrossOrigin("*")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @PostMapping("/planifier/{demandeId}")
    public ResponseEntity<Interview> createInterview(
            @PathVariable Long demandeId,
            @RequestBody Interview interview) {
        return ResponseEntity.ok(interviewService.createInterview(demandeId, interview));
    }

    @GetMapping
    public ResponseEntity<List<Interview>> getAllInterviews() {
        return ResponseEntity.ok(interviewService.getAllInterviews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Interview> getInterviewById(@PathVariable Long id) {
        return ResponseEntity.ok(interviewService.getInterviewById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Interview> updateInterview(
            @PathVariable Long id,
            @RequestBody Interview interview) {
        return ResponseEntity.ok(interviewService.updateInterview(id, interview));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInterview(@PathVariable Long id) {
        interviewService.deleteInterview(id);
        return ResponseEntity.noContent().build();
    }
}
