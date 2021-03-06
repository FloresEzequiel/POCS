package com.infy.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
  //  private static Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

   // @Pointcut("execution(* com.infy.service.CustomerServiceImpl.createCustomer(..))")
   // public void logCreateCustomer(){/* pointcut declaration*/}

    //Aspect methods
   // @Before(value="logCreateCustomer()")
  // public void createLog(JoinPoint joinPoint){
   //     logger.info("Referring by pointcut signature , Joinpoint signature :{}", joinPoint.getSignature());
  //  }
//
  //  @Before("com.infy.aop.CommonAOP.logUpdateCustomer()")
  //  public void updateLog(JoinPoint joinPoint){
    //    logger.info("Referring pointcut from common AOP class , Joinpoint signature :{}",joinPoint.getSignature());
  //  }
}
