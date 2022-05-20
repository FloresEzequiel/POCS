package com.infy.util;

import com.infy.repository.CustomerRepository;
import com.infy.service.CustomerServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfiguration {

    @Bean// Setter Injection
    public CustomerRepository customerRepository(){
        CustomerRepository customerRepository = new CustomerRepository();
        return customerRepository;
    }

    @Bean
    public CustomerServiceImpl customerService(){
        CustomerServiceImpl customerService = new CustomerServiceImpl();
        customerService.setCount(10);
        customerService.setRepository(customerRepository());
        return customerService;
    }
}
