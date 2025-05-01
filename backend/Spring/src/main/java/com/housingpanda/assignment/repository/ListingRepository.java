package com.housingpanda.assignment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.housingpanda.assignment.entities.Listings;

@Repository
public interface ListingRepository extends JpaRepository<Listings, Long>{

}
