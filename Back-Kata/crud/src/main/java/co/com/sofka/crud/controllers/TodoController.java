package co.com.sofka.crud.controllers;

import co.com.sofka.crud.models.TodoModel;
import co.com.sofka.crud.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author Duvan Botero
 * la clase controlador es responsable de procesar las solicitudes
 * controller que recibe peticiones con un formato de específico que cumple
 * con formatos de solicitud RESTful habitualmente son JSON
 */
@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class TodoController {

    @Autowired
    private TodoService todoService;


    /**
     * @Author Duvan Botero
     * Metodos Crud con sus correspondientes endpoints
     */

    @GetMapping(value = "api/todos")
    public Iterable<TodoModel> list() {
        return todoService.list();
    }

    @PostMapping(value = "api/todo")
    public TodoModel save(@RequestBody TodoModel todoModel) {
        return todoService.save(todoModel);
    }

    @PutMapping(value = "api/todo")
    public TodoModel update(@RequestBody TodoModel todoModel) {
        if (todoModel.getId() != null) {
            return todoService.save(todoModel);

        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id") Long id) {
        todoService.delete(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoModel get(@PathVariable("id") Long id) {
        return todoService.get(id);
    }
}
