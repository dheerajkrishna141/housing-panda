import { FormEvent } from "react";
import apiClient, { ListingEntry } from "../service/api-client";

const LisitingForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const post = apiClient("/listings/create");

    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const data = Object.fromEntries(formdata.entries()) as any;
    const listing: ListingEntry = {
      title: data.title,
      description: data.description,
      propertyType: data.propertyType,
      address: {
        apt_no: data.apt_no,
        street_address: data.street_address,
        city: data.city,
        state: data.state,
        zip: data.zip,
        country: data.country,
      },
      contact_info: {
        firstName: data.name,
        email: data.email,
        phoneNo: data.phoneNo,
      },
      bathrooms: data.bathrooms,
      bedrooms: data.bedrooms,
      price: parseFloat(data.price.toString()),
      from_availability: data.from_availability,
      to_availability: data.to_availability,
      gender: data.gender,
    };

    post.postListing(listing).then((res) => console.log(res));
  };

  return (
    <div>
      <h2>Add New Listing</h2>
      <form className="listing-form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" required></textarea>
        </div>
        <div>
          <label>Property Type:</label>
          <div
            className="radio"
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          >
            <label>
              <input
                type="radio"
                name="propertyType"
                value="HOUSE"
                defaultChecked
              />{" "}
              House
            </label>
            <label>
              <input type="radio" name="propertyType" value="APARTMENT" />{" "}
              Apartment
            </label>
          </div>
        </div>
        <div>
          <label>Gender Preference:</label>
          <div
            className="radio"
            style={{ display: "flex", flexDirection: "row", gap: "20px" }}
          >
            <label>
              <input type="radio" name="gender" value="MALE" defaultChecked />{" "}
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="FEMALE" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="ANY" />
              Any
            </label>
          </div>
        </div>
        <div>
          <label>Bedrooms:</label>
          <input type="number" name="bedrooms" required />
        </div>
        <div>
          <label>Bathrooms:</label>
          <input type="number" name="bathrooms" required />
        </div>
        <div>
          <label>Price ($/Month):</label>
          <input type="number" name="price" required />
        </div>
        <div>
          <label>Availability From:</label>
          <input type="date" name="from_availability" required />
        </div>
        <div>
          <label>Availability To:</label>
          <input type="date" name="to_availability" required />
        </div>
        <div>
          <label>Apt No:</label>
          <input type="text" name="apt_no" />
        </div>
        <div>
          <label>Street Address:</label>
          <input type="text" name="street_address" required />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div style={{ width: "100%" }}>
            <label>City:</label>
            <input type="text" name="city" required />
          </div>
          <div style={{ width: "100%" }}>
            <label>State:</label>
            <input type="text" name="state" required />
          </div>
        </div>

        <div>
          <label>Zip Code:</label>
          <input type="text" name="zip" required />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phoneNo" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LisitingForm;
