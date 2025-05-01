import mysql2 from "mysql2";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();

const pool = mysql2
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

async function getListings() {
  const [rows] = await pool.query("SELECT * FROM listings");

  for (const listing of rows) {
    listing.address = await getAddressById(listing.address_id);
    listing.contact_info = await getContactById(listing.contact_id);
  }
  return rows;
}

async function postListing(listing) {
  const {
    title,
    description,
    propertyType,
    gender,
    bedrooms,
    bathrooms,
    price,
    address,
    contact_info,
    from_availability,
    to_availability,
  } = listing;
  const addressId = await saveAddress(address);
  const contactId = await saveContact(contact_info);
  const timestamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("Z", "+00:00");
  const query = `INSERT INTO listings (title, description, property_type, gender, bedrooms, bathrooms, price, address_id, contact_id, from_availability, to_availability, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
  const values = [
    title,
    description,
    propertyType,
    gender,
    bedrooms,
    bathrooms,
    price,
    addressId.id,
    contactId.id,
    from_availability,
    to_availability,
    timestamp,
  ];

  try {
    const [rows] = await pool.query(query, values);
    return getListingById(rows.insertId);
  } catch (error) {
    log("Error inserting listing:", error);
    throw error;
  }
}

async function saveAddress(address) {
  const { apt_no, city, country, state, street_address, zip } = address;
  const query = `INSERT INTO addresses (apt_no, city, country, state, street_address, zip) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [apt_no, city, country, state, street_address, zip];
  const [rows] = await pool.query(query, values);
  return getAddressById(rows.insertId);
}

async function getListingById(id) {
  const values = [id];
  const query = `SELECT * FROM listings WHERE id = ?`;
  const [rows, fields] = await pool.query(query, values);
  return rows[0];
}
async function getAddressById(id) {
  const query = `SELECT * FROM addresses WHERE id = ?`;
  const values = [id];
  const [rows] = await pool.query(query, values);
  return rows[0];
}

async function getContactById(id) {
  const query = `SELECT * FROM contacts WHERE id = ?`;
  const values = [id];
  const [rows] = await pool.query(query, values);
  return rows[0];
}
async function getContactByPhoneNo(phoneNo) {
  const query = `SELECT * FROM contacts WHERE phone_no = ?`;
  const values = [phoneNo];
  const [rows] = await pool.query(query, values);
  return rows[0];
}

async function saveContact(contact) {
  const ifPresent = await getContactByPhoneNo(contact.phoneNo);
  if (ifPresent) {
    return ifPresent;
  } else {
    const { firstName, email, phoneNo } = contact;

    const query = `INSERT INTO contacts (first_name, email, phone_no) VALUES (?, ?, ?)`;
    const values = [firstName, email, phoneNo];

    const [rows] = await pool.query(query, values);
    return getContactById(rows.insertId);
  }
}

export { getListings, postListing };
