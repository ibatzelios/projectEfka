package org.regeneration.controllers;

import org.regeneration.models.Specialty;
import org.regeneration.services.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpecialtyController {

    @Autowired
    SpecialtyService specialtyService;

    @GetMapping("/api/userhomepage/newappointment")
    public List<Specialty> getSpecialty() {
        return specialtyService.getSpecialty();
    }

}

