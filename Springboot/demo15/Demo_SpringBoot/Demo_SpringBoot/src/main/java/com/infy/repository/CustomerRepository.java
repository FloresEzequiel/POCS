package com.infy.repository;

import com.infy.dto.CustomerDTO;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CustomerRepository {
    List<CustomerDTO> customers = null;

    //creates new entry
    @PostConstruct
    public void initializer(){
        CustomerDTO customerDTO = new CustomerDTO();
        customerDTO.setAddress("Chennai");
        customerDTO.setName("Jack");
        customerDTO.setEmail("jack@infy.com");
        customerDTO.setPhoneNo(230392929);
        customers = new ArrayList<>();
        customers.add(customerDTO);
    }

    //adds the received customer object to customer list
    public void createCustomer(CustomerDTO customerDTO){
        customers.add(customerDTO);
    }

    //returns list of customers
    public List<CustomerDTO> fetchCustomer(){
        return customers;
    }

    //deletes a customer
    public String deleteCustomer(long phoneNumber){
        String response ="Customer of:" + phoneNumber + "\t does not exist";
        for(CustomerDTO customer : customers){
            if(customer.getPhoneNo() == phoneNumber){
                customers.remove(customer);
                response = customer.getName() + "of phoneNumber" + customer.getPhoneNo() +
                        "\t got deleted successfully";
                break;
            }
        }
        return response;
    }

    //updates a customer
    public String updateCustomer(long phoneNumber, CustomerDTO customerDTO){
        String response = "Customer of:"+ phoneNumber + "\t does not exist";
        for(CustomerDTO customer : customers){
            if(customer.getPhoneNo() == phoneNumber){
                if(customerDTO.getName() !=null)
                    customer.setName(customerDTO.getName());
                if(customerDTO.getAddress() != null)
                    customer.setAddress(customerDTO.getAddress());

                customers.set(customers.indexOf(customer), customer);
                response = "Customer of phoneNumber"+customer.getPhoneNo()+"\t got updates successfully";
                break;
            }
        }
        return response;
    }
}
