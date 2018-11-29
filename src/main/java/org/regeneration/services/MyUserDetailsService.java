package org.regeneration.services;

import org.regeneration.models.Doctor;
import org.regeneration.models.Patient;
import org.regeneration.repositories.DoctorRepository;
import org.regeneration.repositories.PatientRepository;
import org.regeneration.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;

    @Autowired
    public MyUserDetailsService(PatientRepository patientRepository, DoctorRepository doctorRepository) {
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        if (s.charAt(0) == 'p') {
            String username = s.substring(1, s.length());
            Patient patient = patientRepository.findByUsername(username);

            if (patient == null) {
                throw new UsernameNotFoundException(username);
            }
            return new MyUserDetails(patient);

        } else if (s.charAt(0) == 'd') {
            String username = s.substring(1, s.length());
            Doctor doctor = doctorRepository.findByUsername(username);

            if (doctor == null) {
                throw new UsernameNotFoundException(username);
            }
            return new MyUserDetails(doctor);

        } else {
            String username = s.substring(1, s.length());
            throw new UsernameNotFoundException(username);
        }
    }
}
