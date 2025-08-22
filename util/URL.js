const port = process.env.PORT || 3000;

export const BASE_URL = process.env.PRODUCTION
  ? "https://www.relayable.dev"
  : `http://localhost:${port}`;
