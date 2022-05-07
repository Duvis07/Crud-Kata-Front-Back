import React, { useReducer } from "react";
import { reducer } from "./reducer";
import { initialState, Store } from "../HOST_API";

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
