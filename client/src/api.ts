import axios from "axios";

export const instance = axios.create({
  baseURL: "/api/events/",
  timeout: 1000,
});