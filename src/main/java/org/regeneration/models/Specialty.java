package org.regeneration.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.regeneration.repositories.DoctorRepository;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "specialty")
public class Specialty {
    @JsonIgnore
    private int id;
    private String specialty;

    public Specialty(String specialty) {
        this.specialty = specialty;
    }

    public Specialty() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    private DoctorRepository doctorRepository;

    @OneToMany(mappedBy = "specialty", cascade = CascadeType.ALL)
    private Collection<Doctor> doctors;
//    @JoinColumn(name = "specialty_id")
//    public List<Doctor> getDoctors() {
//        return doctorRepository.findAll();
//    }

 //   public void setSpecialty(Specialty specialty) {
   // }
}
