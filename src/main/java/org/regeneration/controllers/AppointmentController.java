package org.regeneration.controllers;

import org.regeneration.dtos.AppointmentDto;
import org.regeneration.models.Appointment;
import org.regeneration.models.Specialty;
import org.regeneration.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/api/userhomepage/newappointment")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public Appointment newAppointment(@Valid @RequestBody AppointmentDto appointmentDto, Principal principal) {
        return appointmentService.createAppointment(appointmentDto, principal.getName());
    }

    @GetMapping("/api/userhomepage/searchappointment")
    public List<Appointment> searchAppointment(@RequestParam("specialtyId") Specialty specialtyId,
                                               @RequestParam("dateFrom") String dateFrom,
                                               @RequestParam("dateTo") String dateTo, Principal principal) {
        return appointmentService.findAppointment(specialtyId, dateFrom, dateTo, principal.getName());
    }

    @GetMapping("/api/userhomepage/editappointment/edit")
    public List<Appointment> getAppointmentByPatient(Principal principal) {
        return appointmentService.findAppointmentByPatient(principal.getName());
    }

    @PutMapping("/api/userhomepage/editappointment/edit")
    public Appointment updateAppointment(@RequestBody Appointment updatedAppointment) {
        return appointmentService.updateAppointment(updatedAppointment);
    }

    @DeleteMapping("/api/userhomepage/editappointment/edit")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAppointment(@RequestParam("id") int id) {
        appointmentService.deleteAppointment(id);
    }

    @GetMapping("/api/doctorhomepage/searchappointments")
    public List<Appointment> searchDoctorsAppointment(@RequestParam("searchText") String searchText,
                                                      @RequestParam("dateFrom") String dateFrom,
                                                      @RequestParam("dateTo") String dateTo, Principal principal) {
        return appointmentService.searchDoctorsAppointment(searchText, dateFrom, dateTo, principal.getName());
    }
}
