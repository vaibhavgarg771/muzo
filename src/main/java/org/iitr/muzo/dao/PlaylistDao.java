package org.iitr.muzo.dao;

import org.iitr.muzo.models.Playlist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistDao extends CrudRepository<Playlist, Long> {
}
