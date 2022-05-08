import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState, Store } from "../Conexion/HOST_API";

/**
 * author Duvan Botero
 * @param {*} param0
 * @returns
 */

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
