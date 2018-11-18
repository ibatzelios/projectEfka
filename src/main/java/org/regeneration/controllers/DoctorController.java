package org.regeneration.controllers;

import org.regeneration.dtos.SpecialtyDto;
import org.regeneration.models.Doctor;
import org.regeneration.models.Patient;
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


    @GetMapping("/userhomepage/newappointment/doctorsname")
    public List<Doctor> getDoctorBySpecialtyId(@RequestBody SpecialtyDto specialtyDto){
        return doctorRepository.findBySpecialtyId(specialtyDto.getSpecialtyId());
    }

//    @GetMapping("/userhomepage/newappointment/doctorsname")
//    public List<Doctor> getDoctorBySpecialtyId(@RequestParam("specialtyId")int specialtyId){
//        return doctorRepository.findBySpecialtyId(specialtyId);
//    }


}
