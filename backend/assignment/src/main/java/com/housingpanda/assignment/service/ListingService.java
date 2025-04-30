package com.housingpanda.assignment.service;

import java.util.List;

import com.housingpanda.assignment.entities.Listings;

public interface ListingService {
	
	public Listings createListing(Listings listing);
	
	public List<Listings> getListings();

}
