import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000/events",
  timeout: 1000,
});
