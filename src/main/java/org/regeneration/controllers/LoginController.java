package org.regeneration.controllers;

import org.regeneration.repositories.DoctorRepository;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {

    private PatientRepository patientRepository;
    private DoctorRepository doctorRepository;

    @Autowired
    public LoginController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }



    @PostMapping("/login")
    public boolean isLogg() {
        return true;
    }
}
