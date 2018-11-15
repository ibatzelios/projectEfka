package org.regeneration.controllers;

import org.regeneration.models.Doctor;
import org.regeneration.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoctorController {

    private final DoctorRepository doctorRepository;

    @Autowired
    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping("/doctors")
    public List<Doctor> getDoctor() {
        return doctorRepository.findAll();
    }


}
