import { useState } from "react";
import "./App.css";
import RoomCard from "./components/RoomCard";
import useListings from "./hooks/useListings";
import LisitingForm from "./components/LisitingForm";

function App() {
  const listings = useListings();
  const [showForm, setShowForm] = useState(true);
  return (
    <>
      <div>
        <button className="button" onClick={() => setShowForm(!showForm)}>
          {!showForm ? "Add Listing" : "View Listings"}
        </button>
        {showForm && <LisitingForm />}
        {!showForm && (
          <div className="room-grid">
            {listings.map((listing, index) => (
              <RoomCard key={index} listing={listing}></RoomCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
