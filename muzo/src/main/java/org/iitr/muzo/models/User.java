package org.iitr.muzo.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "User")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //When Hibernate creates instance of entities using reflection it uses Class.newInstance() method,
    //which require a no argument constructor to create an instance.
    public User (){}

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }
}
