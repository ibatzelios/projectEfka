package org.regeneration.repositories;

import org.regeneration.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    Doctor findByUsername(String username);
    Doctor findById(int Id);
    List<Doctor> findBySpecialtyId(int specialtyId);

}
