package org.iitr.muzo.exception;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;

public class ErrorDetails {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Date timeStamp;
    private String message;
    private String details;

    public Date getTimeStamp() {
        return timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    public ErrorDetails(){
        this.timeStamp = new Date();
    }

    public ErrorDetails(Date timeStamp, String message, String details){
        super();
        this.timeStamp = timeStamp;
        this.message = message;
        this.details = details;
    }
}
