import { createContext } from "react";

/**
 * @author Duvan Botero
 * HOST_API endpoint para la conexion con el back-end
 */

export const HOST_API = "http://localhost:8080/api";
export const initialState = {
  list: [],
  item: {},
};
export const Store = createContext(initialState);
