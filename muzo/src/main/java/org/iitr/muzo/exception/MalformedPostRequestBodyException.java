package org.iitr.muzo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MalformedPostRequestBodyException extends Exception {

    public MalformedPostRequestBodyException(String message){
        super(message);
    }
}
