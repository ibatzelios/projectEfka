package org.regeneration.controllers;

import org.regeneration.models.Patient;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PatientController {

    private final PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public PatientController(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @GetMapping("/patients")
    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/patients/{id}")
    public Optional<Patient> getPatient(@PathVariable int id) {
        return patientRepository.findById(id);
    }

    @PostMapping("/register")
    public Patient newPatient(@RequestBody Patient patient) {
        patient.setPassword(passwordEncoder.encode(patient.getPassword()));
        return patientRepository.save(patient);
    }



}
