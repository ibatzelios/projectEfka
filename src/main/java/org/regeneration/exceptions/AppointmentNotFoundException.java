package org.regeneration.exceptions;


public class AppointmentNotFoundException extends RuntimeException {

    public AppointmentNotFoundException(int id) {
        super("Could not find appointment with id " + id);
    }
}
