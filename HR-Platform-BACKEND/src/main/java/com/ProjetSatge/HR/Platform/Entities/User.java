package com.ProjetSatge.HR.Platform.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users") // "user" est mot réservé en SQL

public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        private String firstname;

        private String lastname;

        private LocalDate dateOfBirth;

        @Column(unique = true, nullable = false)
        private String email;

        private String password;


    @Enumerated(EnumType.STRING)
    private RoleName name;





    public User() {}

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public User(String firstname, String lastname, LocalDate dateOfBirth, String email, String password) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.dateOfBirth = dateOfBirth;
            this.email = email;
            this.password = password;
        }

    public RoleName getName() {
        return name;
    }

    public void setName(RoleName name) {
        this.name = name;
    }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getFirstname() {
            return firstname;
        }

        public void setFirstname(String firstname) {
            this.firstname = firstname;
        }

        public String getLastname() {
            return lastname;
        }

        public void setLastname(String lastname) {
            this.lastname = lastname;
        }

        public LocalDate getDateOfBirth() {
            return dateOfBirth;
        }

        public void setDateOfBirth(LocalDate dateOfBirth) {
            this.dateOfBirth = dateOfBirth;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }


    @OneToMany(mappedBy = "user")
    private List<Demande> demandes;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
    private Set<Role> roles = new HashSet<>();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private CV cv;
    private boolean enabled = false;

    private String verificationCode;

    private LocalDateTime verificationExpiresAt;

    private String resetCode;

    private LocalDateTime resetExpiresAt;

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public LocalDateTime getVerificationExpiresAt() {
        return verificationExpiresAt;
    }

    public void setVerificationExpiresAt(LocalDateTime verificationExpiresAt) {
        this.verificationExpiresAt = verificationExpiresAt;
    }

    public String getResetCode() {
        return resetCode;
    }

    public void setResetCode(String resetCode) {
        this.resetCode = resetCode;
    }

    public LocalDateTime getResetExpiresAt() {
        return resetExpiresAt;
    }

    public void setResetExpiresAt(LocalDateTime resetExpiresAt) {
        this.resetExpiresAt = resetExpiresAt;
    }
}

