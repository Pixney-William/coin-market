import axios from "axios";

const coinApi = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-CoinAPI-Key": process.env.VUE_APP_COINAPI_KEY,
  },
});

// https://rest.coinapi.io/v1/ohlcv/ETH/USD/latest?period_id=4MTH

export { coinApi };