package com.infy.aop;


import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class CommonAOP {

    //pointcut declarations
    //@Pointcut("execution(* com.infy.service.CustomerServiceImpl.updateCustomer(..))")
   // public void logUpdateCustomer(){/*point cut declaration*/}

   // @Pointcut("execution(*com.infy.service.CustomerServiceImpl.deleteCustomer(..))")
   // public void logDeleteCustomer(){/*pointcut declaration */}

  //  @Pointcut("execution(*com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
  //  public void logFetchCustomer(){/*pointcut declaration*/}

}
