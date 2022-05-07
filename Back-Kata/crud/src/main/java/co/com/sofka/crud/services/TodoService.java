package co.com.sofka.crud.services;

import co.com.sofka.crud.models.TodoModel;
import co.com.sofka.crud.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Esta clase habitualmente se conecta a varios repositorios y agrupa su funcionalidad
 * Esta clase realiza algún servicio, como ejecutar lógica de negocios, realizar cálculos o llamar a API externas.
 */
@Service
public class TodoService {

    @Autowired
    private TodoRepository repository;


    public Iterable<TodoModel> list() {
        return repository.findAll();

    }

    public TodoModel save(TodoModel todoModel) {
        return repository.save(todoModel);
    }

    public void delete(Long id) {
        repository.delete(get(id));
    }

    public TodoModel get(Long id) {
        return repository.findById(id).orElseThrow();
    }
}