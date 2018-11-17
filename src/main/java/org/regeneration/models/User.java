package org.regeneration.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

public interface User {

    @JsonIgnore
    public String getPassword();
    public String getUsername();
}
