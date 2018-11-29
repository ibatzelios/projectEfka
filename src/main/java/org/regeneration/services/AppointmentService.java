package org.regeneration.services;

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
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private  AppointmentRepository appointmentRepository;
    @Autowired
    private  PatientRepository patientRepository;
    @Autowired
    private  DoctorRepository doctorRepository;


    public Appointment createAppointment(AppointmentDto appointmentDto,String patientName){
        Patient patient = patientRepository.findByUsername(patientName);
        Doctor doctor = doctorRepository.findById(appointmentDto.getDoctorId());
        Appointment appointment = new Appointment();
        appointment.setPatient(patient);
        appointment.setDoctor(doctor);
        appointment.setComments(appointmentDto.getComments());
        appointment.setIllness(appointmentDto.getIllness());
        appointment.setTime(Time.valueOf(appointmentDto.getTime()));
        appointment.setDate(Date.valueOf(appointmentDto.getDate()));
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> findAppointment(Specialty specialtyId, String dateFrom, String dateTo, String patientName){
        Patient patient = patientRepository.findByUsername(patientName);
        int patientId = patient.getId();
        Date dateF = Date.valueOf(dateFrom);
        Date dateT = Date.valueOf(dateTo);
        return appointmentRepository.findByDateAndSpecialty(dateF, dateT, specialtyId, patientId);
    }

    public List<Appointment> findAppointmentByPatient(String patientName){
        Patient patient = patientRepository.findByUsername(patientName);
        int patientId = patient.getId();
        return appointmentRepository.findByPatientId(patientId);
    }

    public Appointment updateAppointment(Appointment updatedAppointment){
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

    public void deleteAppointment(int id) {
        appointmentRepository.deleteById(id);
    }

    public List<Appointment> searchDoctorsAppointment(String searchText, String dateFrom, String dateTo, String doctorName) {
        Doctor doctor = doctorRepository.findByUsername(doctorName);
        int doctorId = doctor.getId();
        Date dateF = Date.valueOf(dateFrom);
        Date dateT = Date.valueOf(dateTo);
        return appointmentRepository.findByDateAndIllness(dateF, dateT, searchText, doctorId);
    }
}
