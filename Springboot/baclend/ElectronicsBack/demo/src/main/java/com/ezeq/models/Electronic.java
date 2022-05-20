package com.ezeq.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="electronic")
public class Electronic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer electId;

    @Column(name="elect_name",nullable=false,columnDefinition = "varchar(50)")
    private String electName;

    @Column(name="price", nullable=false)
    private Double price;

    @Column(name="model",nullable = false)
    private String model;

    @Column(name="details",nullable=false, columnDefinition = "varchar(50)")
    private String details;


}
