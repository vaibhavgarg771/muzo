package org.iitr.muzo.dao;

import org.iitr.muzo.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Long> {

    @Query("SELECT password from User WHERE username=?1")
    String fetchUserPassword(String username);
}
