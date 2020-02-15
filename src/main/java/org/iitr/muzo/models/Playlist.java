package org.iitr.muzo.models;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Playlist")
public class Playlist implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "FK_Playlist_User")
    private UserDetails userDetails;

    public Playlist(){}
    public Playlist(long id, String name, UserDetails userDetails){
        this.id = id;
        this.name = name;
        this.userDetails = userDetails;
    }
}
