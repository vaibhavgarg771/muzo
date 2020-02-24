package org.iitr.muzo.controller;

import org.iitr.muzo.models.UserDetails;
import org.iitr.muzo.services.PlaylistService;
import org.iitr.muzo.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(path = "/muzo")
public class MainMuzoController {

//    private TeacherDao teacherDao;

    private UserDetailService userDetailsService;
    private PlaylistService playlistService;

    @Autowired
    public MainMuzoController(UserDetailService userDetailsService, PlaylistService playlistService){
        this.userDetailsService = userDetailsService;
        this.playlistService = playlistService;
    }

    @GetMapping(path = "/getAllUsers")
    public ResponseEntity<Iterable<UserDetails>> getAllUsers(){
        return new ResponseEntity<Iterable<UserDetails>>( userDetailsService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping(path = "/saveUser")
    public ResponseEntity saveUser(@RequestParam String username, @RequestParam String password,
                           @RequestParam String email, @RequestParam String name, @RequestParam String phone,
                           @RequestParam String dob_string) throws ParseException {

        Date dob = new SimpleDateFormat("dd/MM/yyyy").parse(dob_string);
        UserDetails user = new UserDetails(username, password, email, name, phone, dob);
        userDetailsService.createUser(user);
        return new ResponseEntity("Saved Successfully", HttpStatus.OK);
    }

    @GetMapping(path = "/error")
    public ResponseEntity<?> error(){
        System.out.println("I came here" + new Date().getTime());
        return new ResponseEntity<>("there was some error, That I wish I could display properly", HttpStatus.OK);
    }

    //now deprecated; was used for debugging
//    @PostMapping(path = "/teacher")
//    public ResponseEntity<String> saveTeacher(@RequestParam String name){
////    String response = teacherService.saveTeacher(name);
////        return new ResponseEntity<>(response, HttpStatus.OK);
//        teacherDao.save(new Teacher(name));
//        return new ResponseEntity<>("saved Successfully", HttpStatus.OK);
//    }

}
