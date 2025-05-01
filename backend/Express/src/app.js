import { log } from "console";
import express from "express";
import cors from "cors";
import { getListings, postListing } from "./database.js";
import dotenv from "dotenv";

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: "*",
  allowedHeaders: "*",
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/listings/all", async (req, res) => {
  const listintgs = await getListings();
  res.json(listintgs);
});

app.post("/listings/create", async (req, res) => {
  const listing = req.body;
  const createdListing = await postListing(listing);
  res.status(201).json(createdListing);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  log("Server is running on port 8080");
});
