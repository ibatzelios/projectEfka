package org.regeneration.controllers;

import org.regeneration.exceptions.NoLoggedInUserException;
import org.regeneration.models.Doctor;
import org.regeneration.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class DoctorController {

    private final DoctorRepository doctorRepository;

    @Autowired
    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping("/api/doctor")
    public Doctor getLoggedInPatient(Principal principal) {
        if (principal == null) {
            throw new NoLoggedInUserException();
        } else {
            Doctor loggedInUser = doctorRepository.findByUsername(principal.getName());
            return loggedInUser;
        }
    }

    @GetMapping("/api/userhomepage/newappointment/doctorsname")
    public List<Doctor> getDoctorBySpecialtyId(@RequestParam("specialtyId") int specialtyDto){
        return doctorRepository.findBySpecialtyId(specialtyDto);
    }


}
