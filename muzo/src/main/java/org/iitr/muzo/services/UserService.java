package org.iitr.muzo.services;

import org.iitr.muzo.dao.UserDao;
import org.iitr.muzo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {

    private UserDao userDao;
    private PasswordEncoder bCryptEncoder;

    @Autowired
    public UserService(UserDao userDao, PasswordEncoder bCryptEncoder){
        this.userDao = userDao;
        this.bCryptEncoder = bCryptEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.getUserByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found with the username " + username);
        }
        else {
            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
        }
    }

    public String signUpUser(User user) {
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        userDao.save(user);
        return "saved Successfully";
    }

    public Iterable<User> getAllUsers(){
        return userDao.findAll();
    }

}
