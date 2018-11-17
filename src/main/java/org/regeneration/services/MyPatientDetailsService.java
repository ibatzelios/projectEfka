package org.regeneration.services;

import org.regeneration.models.Patient;
import org.regeneration.repositories.PatientRepository;
import org.regeneration.security.MyPatientDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyPatientDetailsService implements UserDetailsService {

    private final PatientRepository patientRepository;

    @Autowired
    public MyPatientDetailsService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Patient patient = patientRepository.findByUsername(username);

        if (patient==null){
            throw new UsernameNotFoundException(username);
        }
        return new MyPatientDetails(patient);
    }
}
