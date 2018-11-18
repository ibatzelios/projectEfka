package org.regeneration.repositories;

import org.regeneration.models.Doctor;
import org.regeneration.models.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecialtyRepository extends JpaRepository<Specialty, Integer> {
}
