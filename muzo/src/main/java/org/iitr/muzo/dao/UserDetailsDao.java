package org.iitr.muzo.dao;

import org.iitr.muzo.models.UserDetails;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserDetailsDao extends CrudRepository<UserDetails, Long> {

    @Query("Select name FROM UserDetails WHERE id=?1")
    String getNameByUserId(Long id);
}
