import { createContext } from "react";

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  list: [],
  item: {},
};
export const Store = createContext(initialState);
