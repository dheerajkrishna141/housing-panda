import axios from "axios";

export interface Address {
  apt_no: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ContactInfo {
  firstName: string;
  email: string;
  phoneNo: string;
}

export interface ListingEntry {
  title: string;
  description: string;
  propertyType: "APARTMENT" | "HOUSE" | "CONDO" | "TOWNHOUSE";
  gender: "MALE" | "FEMALE" | "ANY";
  bedrooms: number;
  bathrooms: number;
  price: number;
  address: Address;
  contact_info: ContactInfo;
  from_availability: string;
  to_availability: string;
  created_at?: string;
}
const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

class httpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getListings = () => {
    return axiosInstance
      .get<ListingEntry[]>(this.endpoint)
      .then((res) => res.data);
  };

  postListing = (listing: ListingEntry) => {
    return axiosInstance
      .post<ListingEntry>(this.endpoint, listing)
      .then((res) => res.data);
  };
}

const apiClient = (endpoint: string) => new httpService(endpoint);

export default apiClient;
