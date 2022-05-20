package com.infy.repository;

import com.infy.dto.CustomerDTO;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerRepository {
    List<CustomerDTO> customers = null;

    //Equivalent similar to constructor. Here, populates the DTOS in a hard coded way
    @PostConstruct
    public void initializer(){
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setAddress("Chennai");
        customerDTO.setName("Jack");
        customerDTO.setEmail("Jack@infy.com");
        customers = new ArrayList<>();
        customers.add(customerDTO);
    }

    //adds the received customer object to customers list
    public void createCustomer(CustomerDTO customerDTO){
        customers.add(customerDTO);
    }

    //returns list of customers
    public List<CustomerDTO> fetchCustomer(){
        return customers;
    }
}
