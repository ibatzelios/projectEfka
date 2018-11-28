package org.regeneration.exceptions;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;

@RestControllerAdvice
public class PatientControllerAdvice {

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorDetails validationError(ConstraintViolationException e) {

        int first = 0;
        int second = 0;

        for (int i = 0; i < e.getMessage().length(); i++) {
            if (e.getMessage().charAt(i) == '$') {
                first = i;
                break;
            }
        }

        for (int i = first + 1; i < e.getMessage().length(); i++) {
            if (e.getMessage().charAt(i) == '$') {
                second = i;
                break;
            }
        }

        String message = e.getMessage().substring(first + 1, second);
        return new ErrorDetails("Validation Error", message);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorDetails DataIntegrityViolation(DataIntegrityViolationException e) {

        int count = 0;
        int first = 0;
        int second = 0;
        for (int i = 0; i < e.getMessage().length(); i++) {
            if (e.getMessage().charAt(i) == '[') {
                count++;
            }
            if (count == 2) {
                first = i;
                break;
            }
        }
        for (int i = first + 1; i < e.getMessage().length(); i++) {
            if (e.getMessage().charAt(i) == ']') {
                second = i;
            }
        }
        String message = e.getMessage().substring(first + 1, second);
        return new ErrorDetails("Duplicate entry", "Duplicate entry for " + message + "");
    }

}
