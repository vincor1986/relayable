const port = process.env.PORT || 3000;
const prod = process.env.PRODUCTION === "true" && !process.env.CI;

export const BASE_URL = prod
  ? "https://www.relayable.dev"
  : `http://localhost:${port}`;
