package org.regeneration.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "specialty")
public class Specialty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String specialty;

    public Specialty(String specialty) {
        this.specialty = specialty;
    }

    public Specialty() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "specialty", cascade = CascadeType.ALL)
    private Set<Doctor> doctor;



    public Set<Doctor> getDoctor() {
        return doctor;
    }

    public void setDoctor(Set<Doctor> doctor) {
        this.doctor = doctor;
    }
}
