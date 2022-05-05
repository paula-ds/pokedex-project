import axios, { AxiosError } from "axios";

import { API_URL } from "../constants/api";

const api = axios.create({
  baseURL: API_URL,
});

export function getPokemons(limit: number, offset: number = 0) {
  return api.get("/pokemon", { params: { offset, limit } })
}

export function getCustomUrl(url: string) {
  return api.get(url);
}
