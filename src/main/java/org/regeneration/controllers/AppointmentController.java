package org.regeneration.controllers;

import org.regeneration.models.Appointment;
import org.regeneration.models.Patient;
import org.regeneration.repositories.AppointmentRepository;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Optional;

@RestController
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository, PatientRepository patientRepository) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository =patientRepository;
    }

//    @GetMapping("/userhomepage/editappointment/edit/{id}")
//    public Optional<Appointment> getAppointment(@PathVariable int id) {
//        return appointmentRepository.findById(id);
//    }

    @DeleteMapping("/userhomepage/editappointment/edit/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAppointment(@PathVariable int id) {
       // getAppointment(id);
        appointmentRepository.deleteById(id);
    }

    @PostMapping("/api/userhomepage/newappointment")
    public Appointment appointment(@RequestBody Appointment appointment, Principal principal) {
        Patient patient = patientRepository.findByUsername(principal.getName());
        appointment.setPatientId(patient.getId());
        return appointmentRepository.save(appointment);
    }

}
