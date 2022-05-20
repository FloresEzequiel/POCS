package com.revature.controller;


import com.revature.models.JsonResponse;
import com.revature.models.User;
import com.revature.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController("userController")
@RequestMapping(value="api")

public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @GetMapping("user")
    public JsonResponse getAllUsers(){
        return new JsonResponse(true, "listing all users",this.userService.getAllUsers());
    }

    @PostMapping("user")
    public JsonResponse createUser(@RequestBody User user){
        JsonResponse jsonResponse;
        User tempUser = this.userService.createUser(user);
        if(tempUser ==null){
            jsonResponse = new JsonResponse(false, "username already exists in system",null);
        }else{
            jsonResponse = new JsonResponse(true,"user created",user);
        }
        return jsonResponse;
    }

    @GetMapping("user/{id}")
    public JsonResponse getUserById(@PathVariable Integer id){
        JsonResponse jsonResponse;
        User user = this.userService.getUserById(id);
        if(user != null){
            jsonResponse = new JsonResponse(true,"user found",user);
        }else{
            jsonResponse = new JsonResponse(false, "user not found",null);
        }
        return jsonResponse;
    }

    @GetMapping("user/username/{username}")
    public JsonResponse getUserByUsername(@PathVariable String username){
        JsonResponse jsonResponse;
        User user = this.userService.getUserByUsername(username);
        if(user!=null){
            jsonResponse = new JsonResponse(true, "user found",user);
        }else{
            jsonResponse = new JsonResponse(false, "user not found",null);
        }
        return jsonResponse;

    }

}
