const MAX_RISK = parseFloat(process.env.MAX_RISK_PER_TRADE || 0.02);

export function validateRisk(quantity) {
  if (quantity > MAX_RISK) {
    return {
      allowed: false
    };
  }

  return {
    allowed: true
  };
}