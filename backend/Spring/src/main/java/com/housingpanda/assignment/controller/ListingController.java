package com.housingpanda.assignment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.housingpanda.assignment.entities.Listings;
import com.housingpanda.assignment.service.ListingService;

@RestController
@RequestMapping("/listings")
@CrossOrigin(origins = "http://localhost:5173")

public class ListingController {

	@Autowired
	ListingService listingService;
	


	@PostMapping("/create")
	public ResponseEntity<?> createListing(@RequestBody Listings listing) {

		return new ResponseEntity<>(listingService.createListing(listing), HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Listings>> getListings() {
		return new ResponseEntity<List<Listings>>(listingService.getListings(), HttpStatus.ACCEPTED);
	}

}
