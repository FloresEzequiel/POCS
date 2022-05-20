package com.infy.util;

import com.infy.service.CustomerServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/*
   @Configuration: The java configuration class is marked with this annotation. This annotation identifies this as a configuration
    class, and its expected to contain details on beans that are to be created in the Spring application context.

    @Bean: This annotation is used to declare a bean. The methods of configuration class that creates an instance of the
    desired bean are annotated with this annotation. These methods are called by the spring containers during bootstrap
    and the values returned by these methods are treated as spring beans. By default only one bean instance is created for
    a bean definition by the spring container, and that instance is used by the container for the whole application lifetime.
 */
@Configuration
public class SpringConfiguration {

    @Bean(name = "customerService")
    public CustomerServiceImpl CustomerServiceImpl() {
        return new CustomerServiceImpl();
    }
}
