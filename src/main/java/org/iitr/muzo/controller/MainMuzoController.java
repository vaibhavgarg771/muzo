package org.iitr.muzo.controller;

import org.iitr.muzo.models.UserDetails;
import org.iitr.muzo.services.TeacherService;
import org.iitr.muzo.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping
public class MainMuzoController {

    @Autowired
    private UserDetailService userDetailsService;

    @Autowired
    private TeacherService teacherService;

    @GetMapping(path = "/getAllUsers")
    public Iterable<UserDetails> getAllUsers(){
        return userDetailsService.getAllUsers();
    }

    @PostMapping(path = "/saveUser")
    public String saveUser(@RequestParam String username, @RequestParam String password,
                           @RequestParam String email, @RequestParam String name, @RequestParam String phone,
                           @RequestParam String dob_string) throws ParseException {

        Date dob = new SimpleDateFormat("dd/MM/yyyy").parse(dob_string);
        UserDetails user = new UserDetails(username, password, email, name, phone, dob);
        userDetailsService.createUser(user);
        return "Saved Successfully";
    }

    @GetMapping(path = "/error")
    public String error(){
        System.out.println("I came here");
        return "there was some error";
    }

    @PostMapping(path = "/teacher")
    public ResponseEntity<String> saveTeacher(@RequestParam String name){
    String response = teacherService.saveTeacher(name);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
