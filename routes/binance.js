import express from "express";
import { placeTrade } from "../controllers/tradeController.js";

const router = express.Router();

router.post("/trade", placeTrade);

export default router;