package com.infy;

import com.infy.dto.CustomerDTO;
import com.infy.service.CustomerServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.AbstractApplicationContext;

import java.util.List;

@SpringBootApplication
public class DemoSpringBootApplication {

	public static void main(String[] args) {

		//SpringApplication.run(DemoSpringBootApplication.class, args);
		CustomerServiceImpl service = null;
		AbstractApplicationContext context = (AbstractApplicationContext) SpringApplication.run(DemoSpringBootApplication.class,
				args);
		service = (CustomerServiceImpl) context.getBean("customerService");
		List<CustomerDTO> listcust = service.fetchCustomer();
		System.out.println("PhoneNumber"+"	"+"Name"+"	"+"Email"+"	"+"Address");
		for(CustomerDTO customerDTO2 : listcust){
			System.out.format("%5d%10s%15s%10s", customerDTO2.getPhoneNo(), customerDTO2.getName()
			,customerDTO2.getEmail(),customerDTO2.getAddress());
			System.out.println();
		}
	}

}
