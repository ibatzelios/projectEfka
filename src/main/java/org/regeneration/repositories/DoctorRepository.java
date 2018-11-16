package org.regeneration.repositories;

import org.regeneration.models.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

}
