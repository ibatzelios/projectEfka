package org.regeneration.controllers;

import org.regeneration.exceptions.NoLoggedInUserException;
import org.regeneration.models.Doctor;
import org.regeneration.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/api/doctor")
    public Doctor getLoggedInDoctor(Principal principal) {
        if (principal == null) {
            throw new NoLoggedInUserException();
        } else {
            return doctorService.getLoggedInDoctor(principal.getName());
        }

    }

    @GetMapping("/api/userhomepage/newappointment/doctorsname")
    public List<Doctor> getDoctorBySpecialtyId(@RequestParam("specialtyId") int specialtyDto) {
        return doctorService.getDoctorBySpecialtyId(specialtyDto);
    }
}
