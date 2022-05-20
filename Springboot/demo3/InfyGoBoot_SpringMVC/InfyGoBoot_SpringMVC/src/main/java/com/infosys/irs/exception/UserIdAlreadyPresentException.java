package com.infosys.irs.exception;


public class UserIdAlreadyPresentException extends Exception{
    public UserIdAlreadyPresentException(String message){
        super(message);
    }
}
