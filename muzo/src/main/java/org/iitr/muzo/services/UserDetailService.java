package org.iitr.muzo.services;

import org.iitr.muzo.dao.UserDetailsDao;
import org.iitr.muzo.models.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailService {

    @Autowired
    private UserDetailsDao userDetailsDao;

    public Iterable<UserDetails> getAllUsers(){
        return userDetailsDao.findAll();
    }

    public void createUser(UserDetails userDetails){
        userDetailsDao.save(userDetails);
    }
}
