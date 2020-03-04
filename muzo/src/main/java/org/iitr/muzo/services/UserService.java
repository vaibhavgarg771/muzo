package org.iitr.muzo.services;

import org.iitr.muzo.api.LoggedInUser;
import org.iitr.muzo.dao.UserDao;
import org.iitr.muzo.dao.UserDetailsDao;
import org.iitr.muzo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;

@Service
public class UserService {

    private ServiceUtils serviceUtils;
    private UserDao userDao;
    private UserDetailsDao userDetailDao;

    @Autowired
    public UserService(ServiceUtils serviceUtils, UserDao userDao, UserDetailsDao userDetailsDao){
        this.serviceUtils = serviceUtils;
        this.userDao = userDao;
        this.userDetailDao = userDetailsDao;
    }

    public LoggedInUser loginUser(String username, String password) throws NoSuchAlgorithmException{
        String hashedPassword = serviceUtils.hashString(password);
        User user = userDao.validateUser(username);
        if(hashedPassword.equals(user.getPassword())){
            return new LoggedInUser(user.getId(), userDetailDao.getNameByUserId(user.getId()));
        }
        else {
            return null;
        }
    }

    public String signupUser(User user) throws NoSuchAlgorithmException{
        String hashedPassword = serviceUtils.hashString(user.getPassword());
        user.setPassword(hashedPassword);
        userDao.save(user);
        return "saved Successfully";
    }

}
