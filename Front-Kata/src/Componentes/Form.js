import React, { useContext, useRef, useState } from "react";
import { Store, HOST_API } from "../Conexion/HOST_API";

export const Form = () => {
  const formRef = useRef(null);
  const {
    dispatch,
    state: { item },
  } = useContext(Store);
  const [state, setState] = useState({ item });

  /**
   * @author Duvan Botero
   *
   * onAdd agrega elementos a la lista
   */

  const onAdd = (event) => {
    const request = {
      name: state.name,
      id: null,
      isCompleted: false,
    };

    fetch(HOST_API + "/todo", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "add-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };

  /**
   * @author Duvan Botero
   *
   * onEdit edita elementos de la lista
   *
   */

  const onEdit = (event) => {
    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted,
    };

    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  };
  /**
   * @author Duvan Botero
   * formulario para agregar una tarea
   */
  return (
    <form ref={formRef} className="InArriba">
      <input
        className="Input"
        placeholder="Agrega una Tarea"
        type="text"
        name="name"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...state, name: event.target.value });
        }}
      ></input>
      {item.id && (
        <button id="Actualizar" class="btn btn-primary" onClick={onEdit}>
          Actualizar
        </button>
      )}
      {!item.id && (
        <button id="Agregar" class="btn btn-primary" onClick={onAdd}>
          Agregar
        </button>
      )}
    </form>
  );
};
