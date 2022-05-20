package com.infy;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoSpringBootApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(DemoSpringBootApplication.class, args);
	}
	/*used to perform action immediately after the application has started then for this spring boot provides the
	following two interfaces CommandLineRunner and ApplicationRUnner

	CommandLineRunner is the spring boot interface with a run () method. Spring boot automatically calls this method of
	all beans implementing this interface after the application context has been loaded. To use this interface you can
	modify this class
	* */
	@Override
	public void run(String... args) throws Exception{
		System.out.println("Welcome to CommandLIneRunner");
	}

}
