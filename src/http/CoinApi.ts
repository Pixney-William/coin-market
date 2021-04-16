import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "X-CoinAPI-Key": process.env.VUE_APP_COINAPI_KEY,
  },
};

const coinApi: AxiosInstance = axios.create(config);

export { coinApi };
