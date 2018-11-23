package org.regeneration.controllers;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.regeneration.models.Specialty;
import org.regeneration.repositories.SpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpecialtyController {
    private final SpecialtyRepository specialtyRepository;

    @Autowired
    public SpecialtyController(SpecialtyRepository specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }

    @GetMapping("/api/userhomepage/newappointment")
    public List<Specialty> getSpecialty() {
        return specialtyRepository.findAll();
    }


}

