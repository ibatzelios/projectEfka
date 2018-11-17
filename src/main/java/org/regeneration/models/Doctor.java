package org.regeneration.models;

import javax.persistence.*;

@Entity
@Table(name = "doctor")
public class Doctor implements User{

    private int id;
    private String lastName;
    private String firstName;
    private String username;
    private String password;
    private int specialtyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "specialty_id")
    private Specialty specialty;

    public Doctor(String lastName, String firstName, String username, String password, int specialtyId) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.username = username;
        this.password = password;
        this.specialtyId = specialtyId;
    }

    public Doctor() {    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "last_name")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "first_name")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "specialty_id")
    public int getSpecialtyId() {
        return specialtyId;
    }

    public void setSpecialtyId(int specialtyId) {
        this.specialtyId = specialtyId;
    }


}
