package org.regeneration.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;


@Entity
@Table(name = "patient")
public class Patient implements User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="last_name")
    @NotBlank(message = "$Last name cannot be empty$")
    private String lastName;

    @Column(name="first_name")
    @NotBlank(message = "$First name cannot be empty$")
    private String firstName;

    @Column(name="email")
    @NotBlank
    @Email(message = "$Email should be valid$")
    private String email;

    @Column(name="username", unique = true)
    @NotBlank(message = "$Username cannot be empty$")
    @Size(min=2)
    private String username;

    @Column(name="password")
    @NotBlank
    @Size(min=7, message = "$This password must have 7 characters$")
    private String password;

    @Column(name="amka", unique = true)
    @NotBlank(message = "$Amka cannot be empty$")
    @Size(min =10, max=11,message = "$Amka must have 11 characters$")
    private String amka;

    @Column(name="phone", unique = true)
    @NotBlank(message = "$Phone cannot be empty$")
    @Size(min=10, max=15)
    private String phone;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL )
    @JsonBackReference
    private Set<Appointment> appointment;

    public Patient(){};

    public Patient(String lname,String fname,  String email, String username, String password, String amka, String phone) {
        this.lastName = lname;
        this.firstName = fname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.amka = amka;
        this.phone = phone;
    }

    public int getId() {
        return id;
    }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getAmka() {
        return amka;
    }

    public String getPhone() {
        return phone;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUserName(String userName) {
        this.username = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAmka(String amka) {
        this.amka = amka;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getIdFromUsername(String username){
        return this.getId();
    }

    public Set<Appointment> getAppointment() {
        return appointment;
    }

    public void setAppointment(Set<Appointment> appointment) {
        this.appointment = appointment;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", amka='" + amka + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }

}
