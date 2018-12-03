package org.regeneration.services;

import org.regeneration.models.Doctor;
import org.regeneration.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor getLoggedInDoctor(String name) {
        Doctor loggedInUser = doctorRepository.findByUsername(name);
        return loggedInUser;
    }

    public List<Doctor> getDoctorBySpecialtyId(int specialtyDto) {
        return doctorRepository.findBySpecialtyId(specialtyDto);
    }
}
