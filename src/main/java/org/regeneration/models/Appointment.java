package org.regeneration.models;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "doctor_id", insertable = false, updatable = false)
    private int doctorId;
    @Column(name = "patient_id", insertable = false, updatable = false)
    private int patientId;
    private Date date;
    private Time time;
    private String illness;
    private String comments;

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "patient_id")
    private Patient patient;

    public Appointment(int doctorId,  Date date, Time time, String illness, String comments) {
        this.doctorId = doctorId;
        //this.patientId = patientId;
        this.date = date;
        this.time = time;
        this.illness = illness;
        this.comments = comments;
    }

    public Appointment() { }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getIllness() {
        return illness;
    }

    public void setIllness(String illness) {
        this.illness = illness;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }
}
