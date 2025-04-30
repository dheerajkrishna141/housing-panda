import apiClient, { ListingEntry } from "../service/api-client";
import { useState, useEffect } from "react";

const useListings = () => {
  const [listings, setListings] = useState<ListingEntry[]>([]);

  useEffect(() => {
    const client = apiClient("/listings/all");
    client.getListings().then((data) => {
      setListings(data);
    });
  }, []);

  return listings;
};

export default useListings;
