package org.regeneration.repositories;

import org.regeneration.models.Appointment;
import org.regeneration.models.Specialty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    List<Appointment> findByPatientId(int patientId);

    @Query("Select app from Appointment app" +
            " inner join Patient p on p.id = app.patient " +
            " inner join Doctor d on app.doctor = d.id"+
            " where app.date between :f and :t and d.specialty= :specialtyId and p.id= :patientId")
    List<Appointment>  findAll(@Param("f")Date f, @Param("t")Date t, @Param("specialtyId") Specialty specialtyId , @Param("patientId")int patientId);
}
