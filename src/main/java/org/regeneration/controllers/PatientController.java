package org.regeneration.controllers;

import org.regeneration.models.Patient;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class PatientController {

    private final PatientRepository patientRepository;

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
        return patientRepository.save(patient);
    }



}
