package com.infy.service;

import com.infy.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    public String createCustomer(CustomerDTO customerDTO);
    public List<CustomerDTO> fetchCustomer();
}
