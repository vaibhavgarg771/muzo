package org.iitr.muzo.dao;

import org.iitr.muzo.models.Details;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DetailsDao extends CrudRepository<Details, Long> {

    @Query("Select name FROM Details WHERE id=?1")
    String getNameByUserId(Long id);
}
