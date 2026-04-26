import Binance from "binance-api-node";

/**
 * Binance Client (TESTNET)
 */
const client = Binance({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_SECRET_KEY,
  httpBase: "https://testnet.binance.vision/api"
});

/**
 * Execute Market Order
 */
export async function executeMarketOrder(symbol, side, quantity) {
  try {
    const order = await client.order({
      symbol,
      side,
      type: "MARKET",
      quantity
    });

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Get Account Balance
 */
export async function getBalance() {
  try {
    const account = await client.accountInfo();

    return account.balances
      .filter(b => Number(b.free) > 0 || Number(b.locked) > 0)
      .map(b => ({
        asset: b.asset,
        free: b.free,
        locked: b.locked
      }));
  } catch (error) {
    throw new Error(error.message);
  }
}