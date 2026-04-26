import { executeMarketOrder } from "../services/binanceService.js";
import { validateRisk } from "../middleware/riskManager.js";

export async function placeTrade(req, res) {
  try {
    const { symbol, side, quantity } = req.body;

    // Risk check
    const riskCheck = validateRisk(quantity);
    if (!riskCheck.allowed) {
      return res.status(400).json({
        error: "Risk limit exceeded"
      });
    }

    const result = await executeMarketOrder(symbol, side, quantity);

    res.json({
      success: true,
      trade: result
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}