package org.iitr.muzo.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "UserDetails")
public class Details implements Serializable {

    @Id
    private long id;

    @MapsId
    @OneToOne
    @JoinColumn(name = "FK_User_UserDetails")
    private User user;

    private String name;
    private String phone;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    @Column(name = "D.O.B.")
    private  Date dob;

    public Details(){
    }

    public Details(User user, String name, String phone, Date dob){
        this.user = user;
        this.name = name;
        this.phone = phone;
        this.dob = dob;
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

}

