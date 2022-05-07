package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.TodoModel;
import org.springframework.data.repository.CrudRepository;

/**
 * contiene las interfaces que extienden de JPA para que estas clases se conecten a la base de datos
 * Ademas gestionan información ya sea de buscar, borrar, actualizar o crear un registro en la base de datos
 */
public interface TodoRepository  extends CrudRepository <TodoModel,Long > {
}
