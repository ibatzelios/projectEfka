package org.regeneration.repositories;

import org.regeneration.models.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

    Patient findByUsername(String username);

}
