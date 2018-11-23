package org.regeneration.repositories;

import org.regeneration.models.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {


    List<Appointment> search(Date f, Date t, int specialty_id ,int patientId);
}
