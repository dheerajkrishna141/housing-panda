package com.housingpanda.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housingpanda.assignment.entities.Addresses;

@Repository
public interface AddressesRepository extends JpaRepository<Addresses, Long>{

}
