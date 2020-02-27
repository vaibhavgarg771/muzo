package org.iitr.muzo.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "UserDetails")
public class UserDetails implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne
    @JoinColumn(name = "FK_User_UserDetails")
    private User user;

    private String email;
    private String name;
    private String phone;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    @Column(name = "D.O.B.")
    private  Date dob;
//    public String languages;

    public UserDetails(){
    }

    public UserDetails(User user, String email, String name, String phone, Date dob){
        this.user = user;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.dob = dob;
    }
    public long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

//    public String getLanguages() {
//        return languages;
//    }
//
//    public void setLanguages(String languages) {
//        this.languages = languages;
//    }
}

