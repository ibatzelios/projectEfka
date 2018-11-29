package org.regeneration.services;

import org.regeneration.models.Patient;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Patient getLoggedInPatient(String name) {
        Patient loggedInUser = patientRepository.findByUsername(name);
        return loggedInUser;
    }

    public Patient newPatient(Patient patient) {
        patient.setPassword(passwordEncoder.encode(patient.getPassword()));
        return patientRepository.save(patient);
    }
}

