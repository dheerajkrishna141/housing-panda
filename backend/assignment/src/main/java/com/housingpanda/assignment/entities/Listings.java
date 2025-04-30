package com.housingpanda.assignment.entities;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.Date;

import com.housingpanda.assignment.enums.Gender;
import com.housingpanda.assignment.enums.PropertyType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Listings {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String title;
	
	private String description;
	
	@Enumerated(EnumType.STRING)
	private PropertyType propertyType;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	private int bedrooms;
	
	private int bathrooms;
	
	private double price;
	
	@OneToOne(orphanRemoval = true, optional = false)
	@JoinColumn(name="address_id", referencedColumnName = "id")
	private Addresses address;
	
	@ManyToOne(optional = false, fetch = FetchType.EAGER)
	@JoinColumn(name = "contact_id", referencedColumnName = "id")
	private Contacts contact_info;
	
	private LocalDate from_availability;
	
	private LocalDate to_availability;
	
	private Date created_at;
	
	
	

}
