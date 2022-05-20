package com.revature.service;

import com.revature.models.User;
import com.revature.repository.UserDap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
public class UserService {

    private UserDap userDap;

    @Autowired
    public UserService(UserDap userDap){
        this.userDap = userDap;
    }
    public List<User> getAllUsers(){
        return this.userDap.findAll();
    }

    public User getUserById(Integer id){
        return this.userDap.findById(id).orElse(null);
    }
    public User createUser(User user){
        return this.userDap.save(user);
    }
    public User getUserByUsername(String username){
        return this.userDap.retrieveUserByUserName(username);
    }
}
