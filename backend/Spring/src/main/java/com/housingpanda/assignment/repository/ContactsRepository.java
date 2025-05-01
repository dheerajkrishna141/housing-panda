package com.housingpanda.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housingpanda.assignment.entities.Contacts;

@Repository
public interface ContactsRepository extends JpaRepository<Contacts, Long>{

	Contacts findByPhoneNo(String phone_no);

	
}
