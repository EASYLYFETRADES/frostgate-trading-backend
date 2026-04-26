import Binance from "binance-api-node";

const client = Binance({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_SECRET_KEY
});

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

export async function getBalance() {
  const account = await client.accountInfo();
  return account.balances;
}