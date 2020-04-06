package org.iitr.muzo.controller;

import org.iitr.muzo.config.JwtTokenUtil;
import org.iitr.muzo.exception.ResourceNotFoundException;
import org.iitr.muzo.models.JwtResponse;
import org.iitr.muzo.models.User;
import org.iitr.muzo.services.DetailService;
import org.iitr.muzo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    private JwtTokenUtil jwtTokenUtil;
    private DetailService detailService;
    private UserService userService;
    private AuthenticationManager authenticationManager;

    JwtAuthenticationController(){}

    @Autowired
    JwtAuthenticationController(JwtTokenUtil jwtTokenUtil,
                                DetailService detailService,
                                UserService userService,
                                AuthenticationManager authenticationManager){
        this.jwtTokenUtil = jwtTokenUtil;
        this.detailService = detailService;
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User authenticationRequest) throws Exception{
        checkValidInputForAuthentication(authenticationRequest);
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final String token = jwtTokenUtil.generateToken(authenticationRequest.getUsername());
        return new ResponseEntity<>(new JwtResponse(token), HttpStatus.OK);
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> createUser(@RequestBody User user) throws Exception{
        checkValidInputForAuthentication(user);
        return ResponseEntity.ok(this.userService.signUpUser(user));
    }

    private Boolean checkValidInputForAuthentication(User user) throws ResourceNotFoundException{
        System.out.println("username received is " + user.getUsername() + " and the password is " + user.getPassword());
        if (user.getUsername() == null || user.getPassword() == null ){
            throw new ResourceNotFoundException("Invalid input where username = " + user.getUsername() + " \npassword " + user.getPassword());
        }
        return true;
    }
    private void authenticate(String username, String passwowrd) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, passwowrd));
        }
        catch (BadCredentialsException ex){
            throw new Exception("Invalid Credentials "+ ex);
        }
    }
}
