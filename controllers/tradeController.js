import { executeMarketOrder, getBalance } from "../services/binanceService.js";
import { validateRisk } from "../middleware/riskManager.js";

/**
 * 🚀 Place Trade (BUY / SELL)
 */
export async function placeTrade(req, res) {
  try {
    const { symbol, side, quantity } = req.body;

    // Basic validation
    if (!symbol || !side || !quantity) {
      return res.status(400).json({
        success: false,
        error: "Missing trade parameters"
      });
    }

    // Risk validation
    const riskCheck = validateRisk(quantity);
    if (!riskCheck.allowed) {
      return res.status(400).json({
        success: false,
        error: "Risk limit exceeded"
      });
    }

    // Execute trade
    const result = await executeMarketOrder(symbol, side, quantity);

    res.json({
      success: true,
      trade: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

/**
 * 💰 Fetch Binance Balance
 */
export async function fetchBalance(req, res) {
  try {
    const balances = await getBalance();

    res.json({
      success: true,
      balances
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}