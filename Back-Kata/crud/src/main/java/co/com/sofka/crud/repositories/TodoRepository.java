package co.com.sofka.crud.repositories;

import co.com.sofka.crud.models.TodoModel;
import org.springframework.data.repository.CrudRepository;

public interface TodoRepository  extends CrudRepository <TodoModel,Long > {
}
