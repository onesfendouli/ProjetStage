package com.ProjetSatge.HR.Platform.Repositories;

import com.ProjetSatge.HR.Platform.Entities.Role;
import com.ProjetSatge.HR.Platform.Entities.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName name);
}
