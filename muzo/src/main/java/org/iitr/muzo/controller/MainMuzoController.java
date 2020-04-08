package org.iitr.muzo.controller;

import org.iitr.muzo.models.User;
import org.iitr.muzo.services.PlaylistService;
import org.iitr.muzo.services.DetailService;
import org.iitr.muzo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

import java.util.Date;
import java.util.Dictionary;
import java.util.Hashtable;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping
public class MainMuzoController {

    private DetailService userDetailsService;
    private PlaylistService playlistService;
    private UserService userService;

    @Autowired
    public MainMuzoController(DetailService userDetailsService, PlaylistService playlistService, UserService userService){
        this.userDetailsService = userDetailsService;
        this.playlistService = playlistService;
        this.userService = userService;
    }

    @GetMapping(path = "/get-all-users")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<Iterable<User>>( userService.getAllUsers(), HttpStatus.OK);
    }

}
