package org.regeneration.exceptions;

public class NoLoggedInUserException extends RuntimeException {
    public NoLoggedInUserException() {
        super("There is no patient logged in");
    }
}
