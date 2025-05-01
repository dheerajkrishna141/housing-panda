import { ListingEntry } from "../service/api-client";

interface RoomCardProps {
  listing: ListingEntry;
}

const RoomCard = ({ listing }: RoomCardProps) => {
  return (
    <div className="room-card-container">
      <div className="room-card-image">Image.</div>
      <h3>{listing.title}</h3>
      <p>
        {listing.property_type} / {listing.bedrooms} bed / {listing.bathrooms}{" "}
        bath
      </p>
      <p>${listing.price} / Month</p>
      <p>
        Available: {listing.from_availability} - {listing.to_availability}
      </p>
      <p>
        Address: {listing.address.apt_no}, {listing.address.street_address},{" "}
        {listing.address.city}, {listing.address.state}, {listing.address.zip},{" "}
        {listing.address.country}
      </p>
      <p>
        Contact: {listing.contact_info.firstName} - {listing.contact_info.email}{" "}
        - {listing.contact_info.phoneNo}
      </p>
      <p>Gender Preference: {listing.gender}</p>
      <p>Description: {listing.description}</p>
      {listing.created_at && (
        <p>Posted on: {new Date(listing.created_at).toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default RoomCard;
