package org.regeneration.controllers;

import org.regeneration.exceptions.NoLoggedInUserException;
import org.regeneration.models.Patient;
import org.regeneration.services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/api/patients")
    public Patient getLoggedInPatient(Principal principal) {
        if (principal == null) {
            throw new NoLoggedInUserException();
        } else {
            return patientService.getLoggedInPatient(principal.getName());
        }
    }

    @PostMapping("/api/register")
    public Patient newPatient(@Valid @RequestBody Patient patient) {
        return patientService.newPatient(patient);
    }
}

