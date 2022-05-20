package com.infy;

import com.infy.dto.CustomerDTO;
import com.infy.service.CustomerServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.AbstractApplicationContext;

@SpringBootApplication
public class DemoSpringBootApplication {

	public static void main(String[] args) {

		//SpringApplication.run(DemoSpringBootApplication.class, args);
		CustomerServiceImpl service = null;
		AbstractApplicationContext context = (AbstractApplicationContext) SpringApplication.run(DemoSpringBootApplication.class,
				args);
		service=(CustomerServiceImpl) context.getBean("customerService");
		service.fetchCustomer();
		CustomerDTO cust = new CustomerDTO(920323, "Jason","jason@gmail.com","Raleigh");
		service.createCustomer(cust);
		service.fetchCustomer();
		CustomerDTO cust2 = new CustomerDTO(23233,"Brian","Brian@info.com","York");
		service.updateCustomer(920323,cust2);
		context.close();
	}

}
