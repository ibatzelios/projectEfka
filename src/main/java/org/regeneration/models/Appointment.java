package org.regeneration.models;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;


@Entity
@Table(name = "appointment")
public class Appointment implements Serializable{
    private static final long serialVersionUiD =1L;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;




    @Column(name="date")
    private Date date;
    @Column(name="time")
    private Time time;

    @Column(name="illness")
    private String illness;

    @Column(name="comments")
    private String comments;
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    // @JsonManagedReference
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    //@JsonIgnoreProperties("appointment")
    //@JsonManagedReference
    private Patient patient;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Doctor getDoctor() {
        return doctor;
    }


    public Patient getPatient() {
        return patient;
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

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", doctor=" + doctor +
                ", patient=" + patient +
                ", date=" + date +
                ", time=" + time +
                ", illness='" + illness + '\'' +
                ", comments='" + comments + '\'' +
                '}';
    }
}
