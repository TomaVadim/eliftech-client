import axios from "axios";

export const fetcher = axios.create({
  baseURL: process.env.BASE_URL,
});
