package org.iitr.muzo.services;

import org.iitr.muzo.dao.DetailsDao;
import org.iitr.muzo.models.Details;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetailService {

    @Autowired
    private DetailsDao detailsDao;

    public Iterable<Details> getAllUsers(){
        return detailsDao.findAll();
    }

    public void createUser(Details details){
        detailsDao.save(details);
    }
}
