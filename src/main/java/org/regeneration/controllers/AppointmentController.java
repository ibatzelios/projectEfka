package org.regeneration.controllers;

import org.regeneration.dtos.AppointmentDto;
import org.regeneration.models.Appointment;
import org.regeneration.models.Doctor;
import org.regeneration.models.Patient;
import org.regeneration.repositories.AppointmentRepository;
import org.regeneration.repositories.DoctorRepository;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.security.Principal;
import java.sql.Date;
import java.sql.Time;
import java.util.List;
import java.util.Optional;

@RestController
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;
    private final PatientRepository patientRepository;
    private final DoctorRepository doctorRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository, PatientRepository patientRepository, DoctorRepository doctorRepository) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository =patientRepository;
        this.doctorRepository = doctorRepository;
    }


    @DeleteMapping("/userhomepage/editappointment/edit/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAppointment(@PathVariable int id) {
       // getAppointment(id);
        appointmentRepository.deleteById(id);
    }

    @PostMapping("/api/userhomepage/newappointment")
    public Appointment newAppointment(@RequestBody AppointmentDto appointmentDto, Principal principal) {
        Appointment appointment = new Appointment();
        Patient patient = patientRepository.findByUsername(principal.getName());
        Doctor doctor = doctorRepository.findById(appointmentDto.getDoctorId());
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setComments(appointmentDto.getComments());
        appointment.setIllness(appointmentDto.getIllness());
        appointment.setTime(Time.valueOf(appointmentDto.getTime()));
        appointment.setDate(Date.valueOf(appointmentDto.getDate()));
        System.out.println(appointment.toString());

        return appointmentRepository.save(appointment);
    }

    @GetMapping("/api/userhomepage/searchappointment")
    public List<Appointment> getSearchAppointment(@RequestParam("specialtyId") int specialtyId,
                                                  @RequestParam("dateFrom") String dateFrom,
                                                  @RequestParam("dateTo") String dateTo, Principal principal ){
        Patient patient = patientRepository.findByUsername(principal.getName());
        Date dateF = Date.valueOf(dateFrom);
        Date dateT = Date.valueOf(dateTo);
        int patientId = patient.getId();

        return appointmentRepository.search(dateF,dateT,specialtyId,patientId);
    }
}
