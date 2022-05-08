import React, { Fragment } from "react";
import { Form } from "./Componentes/Form";
import { List } from "./Componentes/List";
import { StoreProvider } from "./Componentes/StoreProvider";
/**
 * @Author Duvan Botero
 * @returns A
 */
function App() {
  return (
    <Fragment>
      <div className="div">
        <h2 id="h2">CRUD-KATA</h2>
      </div>
      <StoreProvider>
        <Form />
        <List />
      </StoreProvider>
    </Fragment>
  );
}

export default App;
