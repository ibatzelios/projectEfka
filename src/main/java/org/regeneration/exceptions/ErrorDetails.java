package org.regeneration.exceptions;

import java.util.Date;

public class ErrorDetails {

    private String error;
    private String details;

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public ErrorDetails(String error, String details) {
        this.error = error;
        this.details = details;
    }
}
