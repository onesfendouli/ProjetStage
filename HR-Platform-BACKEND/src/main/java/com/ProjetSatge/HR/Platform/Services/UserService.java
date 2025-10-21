package com.ProjetSatge.HR.Platform.Services;

import com.ProjetSatge.HR.Platform.Entities.Role;
import com.ProjetSatge.HR.Platform.Entities.User;
import com.ProjetSatge.HR.Platform.Repositories.RoleRepository;
import com.ProjetSatge.HR.Platform.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private  RoleRepository roleRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public Optional<User> findById(Integer id) {
        return userRepository.findById(id);
    }
//    public User save(User user) {
//        return userRepository.save(user);
//    }

    public User save(User user) {
        Set<Role> attachedRoles = new HashSet<>();
        for (Role role : user.getRoles()) {
            Optional<Role> existingRole = roleRepository.findByName(role.getName());
            if (existingRole.isPresent()) {
                Role existing = existingRole.get();
                existing.setUser(user);
                attachedRoles.add(existing);
            } else {
                role.setUser(user);
                attachedRoles.add(role);
            }
        }
        user.setRoles(attachedRoles);
        return userRepository.save(user);
    }


    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }
}
