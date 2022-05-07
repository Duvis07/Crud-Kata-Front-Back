import React, { useContext, useEffect } from "react";
import { Store, HOST_API } from "../HOST_API";

export const List = () => {
  const { dispatch, state } = useContext(Store);

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list", list });
      });
  }, [state.list.length, dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE",
    }).then((list) => {
      dispatch({ type: "delete-item", id });
    });
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-item", item: todo });
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
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
      });
  };

  return (
    <div className="tabla">
      <table class="table table-hover">
        <thead class="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">¿Esta completado?</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {state.list.map((todo) => (
            <tr>
              <td>{todo.id}</td>
              <td className={todo.completed ? "aceptado" : {}}>{todo.name}</td>
              <td>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  onChange={(event) => onChange(event, todo)}
                ></input>
              </td>
              <td>
                <button
                  id="Eliminar"
                  type="button"
                  class="btn btn-danger"
                  onClick={() => onDelete(todo.id)}
                >
                  Eliminar
                </button>
              </td>

              <td>
                <button
                  id="Editar"
                  class="btn btn-primary"
                  onClick={() => onEdit(todo)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
