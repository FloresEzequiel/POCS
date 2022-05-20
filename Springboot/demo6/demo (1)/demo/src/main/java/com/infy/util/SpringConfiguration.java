package com.infy.util;

import com.infy.repository.CustomerRepository;
import com.infy.service.CustomerServiceImpl;
import org.springframework.context.annotation.Bean;

public class SpringConfiguration {
    @Bean//constructor injection
    public CustomerServiceImpl customerService(){
        return new CustomerServiceImpl(customerRepository(),20);
    }

    @Bean//constructor injection
    public CustomerRepository customerRepository(){
        return new CustomerRepository();
    }
}
