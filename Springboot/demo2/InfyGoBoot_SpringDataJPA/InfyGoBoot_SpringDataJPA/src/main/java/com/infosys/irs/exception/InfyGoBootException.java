package com.infosys.irs.exception;

public class InfyGoBootException extends Exception{
    private static final long serialVersionUID =1L;
    /*
    All other user defined exception classes will inherit this exception class
     */
    public InfyGoBootException(String message){
        super(message);
    }
}
