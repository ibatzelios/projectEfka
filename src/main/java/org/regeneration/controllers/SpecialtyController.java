package org.regeneration.controllers;


import org.regeneration.models.Specialty;
import org.regeneration.repositories.SpecialtyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SpecialtyController {
    private final SpecialtyRepository specialtyRepository;

    @Autowired
    public SpecialtyController(SpecialtyRepository specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }

    @GetMapping("/userhomepage/newappointment")
    public List<Specialty> getSpecialty() {
        return specialtyRepository.findAll();
    }


}

