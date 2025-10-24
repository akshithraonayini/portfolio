import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import messagesRouter from "./routes/messages.js"; // adjust path

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mount the router at /messages
app.use("/messages", messagesRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
