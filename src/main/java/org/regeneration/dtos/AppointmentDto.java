package org.regeneration.dtos;

import javax.validation.constraints.NotBlank;

public class AppointmentDto {

    private int doctorId;
    @NotBlank(message = "$Date cannot be empty$")
    private String date;
    @NotBlank(message = "$Time cannot be empty$")
    private String time;
    @NotBlank(message = "$Illness cannot be empty$")
    private String illness;
    @NotBlank(message = "$Comments cannot be empty$")
    private String comments;

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
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
}
