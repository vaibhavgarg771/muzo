package org.iitr.muzo.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Playlist")
public class Playlist implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Details getDetails() {
        return details;
    }

    public void setDetails(Details details) {
        this.details = details;
    }

    @ManyToOne
    @JoinColumn(name = "FK_Playlist_User")
    private Details details;

    public Playlist(){}
    public Playlist(long id, String name, Details details){
        this.id = id;
        this.name = name;
        this.details = details;
    }
}
