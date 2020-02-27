package org.iitr.muzo.services;

import org.iitr.muzo.dao.UserDao;
import org.iitr.muzo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
public class UserService {

    private ServiceUtils serviceUtils;
    private UserDao userDao;

    @Autowired
    public UserService(ServiceUtils serviceUtils, UserDao userDao){
        this.serviceUtils = serviceUtils;
        this.userDao = userDao;
    }

    public String loginUser(String username, String password) throws NoSuchAlgorithmException{
        String hashedPassword = serviceUtils.hashString(password);
        if(hashedPassword.equals(userDao.fetchUserPassword(username))){
            return "logged in";
        }
        else {
            return "The username or password donot match";
        }
    }

    public String signupUser(User user) throws NoSuchAlgorithmException{
        String hashedPassword = serviceUtils.hashString(user.getPassword());
        user.setPassword(hashedPassword);
        userDao.save(user);
        return "saved Successfully";
    }

}
