package org.iitr.muzo.dao;

import org.iitr.muzo.models.UserDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserDetailsDao extends CrudRepository<UserDetails, Long> {

}
