package com.infy.util;

import com.infy.dto.CustomerDTO;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.text.DateFormat;
import java.util.List;

@Component
@Aspect
public class LoggingAspect {
    private static Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @AfterThrowing("execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
    public void logAfterThrowingAdvice(JoinPoint joinPoint){
        logger.info("In After throwing Advice, Joinpoint signature :{}", joinPoint.getSignature());
    }
    @AfterThrowing(pointcut = "execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))", throwing = "exception")
    public void logAfterThrowingAdviceDetails(JoinPoint joinPoint, Exception exception){
        logger.info("In After throwing Advice, JoinPoint signature :{}", joinPoint.getSignature());
        logger.error(exception.getMessage(),exception);
    }
    @After("execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
    public void logAfterAdvice(JoinPoint joinPoint){
        logger.info("In After Advice, Joinpoints signature :{}", joinPoint.getSignature());
        long time = System.currentTimeMillis();
        String date = DateFormat.getDateTimeInstance().format(time);
        logger.info("Report generated at time {}", date);
    }

    @Before("execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
    public void logBeforeAdvice(JoinPoint joinPoint){
        //Log Joinpoint signature details
        logger.info("In before Advice, Joinpoint signature :{}", joinPoint.getSignature());
        long time = System.currentTimeMillis();
        String date = DateFormat.getDateTimeInstance().format(time);
        logger.info("Report generated at time:{}",date);
    }

    @AfterReturning(pointcut = "execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
    public void logAfterReturningAdvise(JoinPoint joinPoint){
        logger.info("In AfterReturning Advice, Joinpoint signature : {}",joinPoint.getSignature());

    }
    @AfterReturning(pointcut = "execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))",returning = "result")
    public void logAfterReturningDetails(JoinPoint joinPoint, List<CustomerDTO>result){
        logger.info("In AfterReturning Advice with return value, Joinpoint signature :{}", joinPoint.getSignature());
        System.out.println(result);
        long time = System.currentTimeMillis();
        String date = DateFormat.getDateTimeInstance().format(time);
        logger.info("Report generated at time:{}",date);
    }

    @Around("execution(* com.infy.service.CustomerServiceImpl.fetchCustomer(..))")
    public Object aroundAdvise(ProceedingJoinPoint joinPoint) throws Throwable{
        System.out.println("Before proceeding part of the Around advice.");
        Object cust = joinPoint.proceed();
        System.out.println("After proceeding part of the Around advice.");
        return cust;
    }


}
