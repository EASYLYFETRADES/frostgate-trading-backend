import Binance from "binance-api-node";

const client = Binance.default({
  apiKey: process.env.BINANCE_API_KEY,
  apiSecret: process.env.BINANCE_SECRET_KEY
});

export async function executeMarketOrder(symbol, side, quantity) {
  const order = await client.order({
    symbol,
    side,
    type: "MARKET",
    quantity
  });

  return order;
}

export async function getBalance() {
  const account = await client.accountInfo();

  return account.balances
    .filter((b) => Number(b.free) > 0 || Number(b.locked) > 0)
    .map((b) => ({
      asset: b.asset,
      free: b.free,
      locked: b.locked
    }));
}