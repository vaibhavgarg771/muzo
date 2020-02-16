package org.iitr.muzo.models;

import javax.persistence.*;

//deprecated: not meant to be used

@Entity
@Table(name = "Teacher")
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    public Teacher(){}
    public Teacher(String name){ this.name = name; }
    public long getId(){ return this.id; }
    public String getName(){ return this.name; }
    public void setName(String name){ this.name = name; }

}
