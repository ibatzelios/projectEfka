package org.regeneration.controllers;

import org.regeneration.dtos.AppointmentDto;
import org.regeneration.exceptions.AppointmentNotFoundException;
import org.regeneration.models.Appointment;
import org.regeneration.models.Doctor;
import org.regeneration.models.Patient;
import org.regeneration.models.Specialty;
import org.regeneration.repositories.AppointmentRepository;
import org.regeneration.repositories.DoctorRepository;
import org.regeneration.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
    }

    @PostMapping("/api/userhomepage/newappointment")
    //@ResponseStatus(value = HttpStatus.NO_CONTENT)
    public Appointment newAppointment(@Valid @RequestBody AppointmentDto appointmentDto, Principal principal) {
        Appointment appointment = new Appointment();
        Patient patient = patientRepository.findByUsername(principal.getName());
        Doctor doctor = doctorRepository.findById(appointmentDto.getDoctorId());
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setComments(appointmentDto.getComments());
        appointment.setIllness(appointmentDto.getIllness());
        appointment.setTime(Time.valueOf(appointmentDto.getTime()));
        appointment.setDate(Date.valueOf(appointmentDto.getDate()));
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/api/userhomepage/searchappointment")
    public List<Appointment> searchAppointment(@RequestParam("specialtyId") Specialty specialtyId,
                                               @RequestParam("dateFrom") String dateFrom,
                                               @RequestParam("dateTo") String dateTo, Principal principal) {
        Patient patient = patientRepository.findByUsername(principal.getName());
        Date dateF = Date.valueOf(dateFrom);
        Date dateT = Date.valueOf(dateTo);
        int patientId = patient.getId();


        return appointmentRepository.findByDateAndSpecialty(dateF, dateT, specialtyId, patientId);
    }

    @GetMapping("/api/userhomepage/editappointment/edit")
    public List<Appointment> getAppointmentByPatient(Principal principal) {
        Patient patient = patientRepository.findByUsername(principal.getName());
        int patientId = patient.getId();
        return appointmentRepository.findByPatientId(patientId);
    }

    @PutMapping("/api/userhomepage/editappointment/edit")
    public Appointment updateAppointment(@RequestBody Appointment updatedAppointment) {
        int id = updatedAppointment.getId();
        return appointmentRepository.findById(id)
                .map(appointment -> {
                    appointment.setDoctor(updatedAppointment.getDoctor());
                    appointment.setPatient(updatedAppointment.getPatient());
                    appointment.setDate(updatedAppointment.getDate());
                    appointment.setTime(updatedAppointment.getTime());
                    appointment.setIllness(updatedAppointment.getIllness());
                    appointment.setComments(updatedAppointment.getComments());
                    return appointmentRepository.save(appointment);
                })
                .orElseThrow(() -> new AppointmentNotFoundException(id));
    }

    @DeleteMapping("/api/userhomepage/editappointment/edit")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAppointment(@RequestParam("id") int id) {
        appointmentRepository.deleteById(id);
    }

    @GetMapping("/api/doctorhomepage/searchappointments")
    public List<Appointment> searchDoctorsAppointment(@RequestParam("searchText") String searchText,
                                                      @RequestParam("dateFrom") String dateFrom,
                                                      @RequestParam("dateTo") String dateTo, Principal principal) {
        Doctor doctor = doctorRepository.findByUsername(principal.getName());
        Date dateF = Date.valueOf(dateFrom);
        Date dateT = Date.valueOf(dateTo);
        int doctorId = doctor.getId();

        return appointmentRepository.findByDateAndIllness(dateF, dateT, searchText, doctorId);
    }

    //edw xreiazetai enas elegxos gia na elegxei oti to rantevou anhkei ston sygkekrimeno giatro
    @GetMapping("/api/doctorhomepage/showappointmentsdetails")
    public Optional<Appointment> getAppointmentById(@RequestParam("id") int id, Principal principal) {
        Doctor doctor = doctorRepository.findByUsername(principal.getName());
        int doctorId = doctor.getId();
        return appointmentRepository.findById(id);
    }
}
