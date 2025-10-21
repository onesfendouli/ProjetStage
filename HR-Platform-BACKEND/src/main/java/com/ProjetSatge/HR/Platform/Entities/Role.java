package com.ProjetSatge.HR.Platform.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Enumerated(EnumType.STRING)

        private RoleName name;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Role(User user, RoleName name) {
        this.user = user;
        this.name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role() {}

        public Role(RoleName name) {
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public RoleName getName() {
            return name;
        }

        public void setName(RoleName name) {
            this.name = name;
        }
    }

