package com.housingpanda.assignment.serviceImpl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.housingpanda.assignment.entities.Addresses;
import com.housingpanda.assignment.entities.Contacts;
import com.housingpanda.assignment.entities.Listings;
import com.housingpanda.assignment.repository.AddressesRepository;
import com.housingpanda.assignment.repository.ContactsRepository;
import com.housingpanda.assignment.repository.ListingRepository;
import com.housingpanda.assignment.service.ListingService;

@Service
public class ListingServiceImpl implements ListingService {

	@Autowired
	ListingRepository listingRepository;
	
	@Autowired
	AddressesRepository addressesRepo;

	@Autowired
	ContactsRepository contactsRepo;

	@Override
	public Listings createListing(Listings listing) {
		Addresses addresses = new Addresses();
		Contacts contacts = new Contacts();
		addresses = listing.getAddress();

		addresses = addressesRepo.save(addresses);

		contacts = listing.getContact_info();
		contacts = getContact(contacts);

		listing.setAddress(addresses);
		listing.setContact_info(contacts);

		listing.setCreated_at(new Date(System.currentTimeMillis()));

		listing = listingRepository.save(listing);
		contacts.getListings().add(listing);
		addresses.setListing_id(listing);
		
		contactsRepo.save(contacts);
		addressesRepo.save(addresses);
		
		return listing;

	}
	
	
	private Contacts getContact(Contacts contact) {
		
		Contacts cont = contactsRepo.findByPhoneNo(contact.getPhoneNo());
		
		if(cont == null) {
			return contactsRepo.save(contact);
		}
		return cont;
		
	}

	@Override
	public List<Listings> getListings() {
		return listingRepository.findAll();
	}

}
