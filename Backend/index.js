import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  // define routes
  app.use("/book", bookRoute);
  app.use("/user", userRoute);

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server on port ${PORT}:`, err.message);
    return;
  }
  console.log(`Server is listening on port ${PORT}`);
});
