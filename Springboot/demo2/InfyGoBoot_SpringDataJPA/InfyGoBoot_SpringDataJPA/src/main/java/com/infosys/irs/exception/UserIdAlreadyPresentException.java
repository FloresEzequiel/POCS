package com.infosys.irs.exception;

public class UserIdAlreadyPresentException extends InfyGoBootException{
    private static final long serialVersionUID = 1L;
    public UserIdAlreadyPresentException(String message){
        super(message);
    }
}
