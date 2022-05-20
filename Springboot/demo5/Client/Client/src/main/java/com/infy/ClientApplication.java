package com.infy;

import com.infy.service.CustomerService;
import com.infy.service.CustomerServiceImpl;
import com.infy.util.SpringConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

//demo constructor injection
@SpringBootApplication
public class ClientApplication {

	public static void main(String[] args) {

		//SpringApplication.run(ClientApplication.class, args);
		CustomerService service = null;
		AbstractApplicationContext context = new AnnotationConfigApplicationContext(SpringConfiguration.class);
		service = (CustomerServiceImpl) context.getBean("customerService");
		System.out.println(service.fetchCustomer());
		context.close();
	}

}
