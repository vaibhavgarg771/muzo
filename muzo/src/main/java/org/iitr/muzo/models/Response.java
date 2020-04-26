package org.iitr.muzo.models;

import java.io.Serializable;

public class Response implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String message;
    private String username;

    public Response(String message){
        this.message = message;
    }
    public Response(String message, String username) {
        this.message = message;
        this.username = username;
    }
    public String getmessage() {
        return this.message;
    }
    public String getUsername(){
        return this.username;
    }
}
