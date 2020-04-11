package org.iitr.muzo.models;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwtToken;
    private String username;

    public JwtResponse(String jwtToken, String username) {
        this.jwtToken = jwtToken;
        this.username = username;
    }
    public String getToken() {
        return this.jwtToken;
    }
    public String getUsername(){
        return this.username;
    }
}
