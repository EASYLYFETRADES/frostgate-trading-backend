import express from "express";
import { placeTrade, fetchBalance } from "../controllers/tradeController.js";

const router = express.Router();

/**
 * 🚀 Execute Trade
 */
router.post("/trade", placeTrade);

/**
 * 💰 Get Balance
 */
router.get("/balance", fetchBalance);

export default router;