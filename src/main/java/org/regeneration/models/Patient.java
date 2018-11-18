package org.regeneration.models;

import javax.persistence.*;

@Entity
@Table(name = "patient")
public class Patient implements User {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="last_name")
    private String lastName;
    @Column(name="first_name")
    private String firstName;
    @Column(name="email")
    private String email;
    @Column(name="username")
    private String username;
    @Column(name="password")
    private String password;
    @Column(name="amka")
    private String amka;
    @Column(name="phone")
    private String phone;

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
