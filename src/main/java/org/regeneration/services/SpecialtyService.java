package org.regeneration.services;

import org.regeneration.models.Specialty;
import org.regeneration.repositories.SpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialtyService {

    @Autowired
    SpecialtyRepository specialtyRepository;

    public List<Specialty> getSpecialty() {
        return specialtyRepository.findAll();
    }
}
