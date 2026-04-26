import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import binanceRoutes from "./routes/binance.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/binance", binanceRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("FrostGate Backend Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});