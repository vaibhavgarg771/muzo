package org.iitr.muzo.controller;

import org.iitr.muzo.exception.MalformedPostRequestBodyException;
import org.iitr.muzo.exception.ResourceNotFoundException;
import org.iitr.muzo.models.User;
import org.iitr.muzo.models.UserDetails;
import org.iitr.muzo.services.PlaylistService;
import org.iitr.muzo.services.UserDetailService;
import org.iitr.muzo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Dictionary;
import java.util.Hashtable;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(path = "/muzo")
public class MainMuzoController {

//    private TeacherDao teacherDao;

    private UserDetailService userDetailsService;
    private PlaylistService playlistService;
    private UserService userService;

    @Autowired
    public MainMuzoController(UserDetailService userDetailsService, PlaylistService playlistService, UserService userService){
        this.userDetailsService = userDetailsService;
        this.playlistService = playlistService;
        this.userService = userService;
    }

    @GetMapping(path = "/get-all-users")
    public ResponseEntity<Iterable<UserDetails>> getAllUsers(){
        return new ResponseEntity<Iterable<UserDetails>>( userDetailsService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping(path = "/save-user-details")
    public ResponseEntity<?> saveUserDetails(@RequestBody UserDetails userDetails) throws ParseException {

//        Date dob = new SimpleDateFormat("dd/MM/yyyy").parse(userDetails);
//        UserDetails user = new UserDetails(username, password, email, name, phone, dob);
//        userDetailsService.createUser(user);
        return new ResponseEntity("Saved Successfully", HttpStatus.OK);
    }

    @PostMapping(path="/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws MalformedPostRequestBodyException, NoSuchAlgorithmException {
        if (user.getUsername() == null || user.getPassword() == null){
            throw new MalformedPostRequestBodyException("Could not fetch Username/ Password from the request");
        }
        String status = this.userService.loginUser(user.getUsername(), user.getPassword());
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @PostMapping(path = "/signup")
    public ResponseEntity<?> signupUser(@RequestBody User user) throws MalformedPostRequestBodyException, NoSuchAlgorithmException {
        System.out.println("I got a hit !! "+user.getUsername()+", "+user.getPassword());
        if (user.getUsername() == null || user.getPassword() == null){
            throw new MalformedPostRequestBodyException("Could not fetch Username/ Password from the request");
        }
        System.out.println("crossed the if condition");
        String status = this.userService.signupUser(user);
        System.out.println(status);
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @GetMapping(path = "/error")
    public ResponseEntity<?> error() throws ResourceNotFoundException{
        System.out.println("I came here" + new Date().getTime());
//        if ( 1 !=2){
//            throw new ResourceNotFoundException("Wish I could return an error I wanted");
//        }
        Dictionary error = new Hashtable();
        error.put("timestamp", new Date());
        error.put("errorMessage", "there was some error, That I wish I could display properly");
        return new ResponseEntity<>(error, HttpStatus.OK);
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
