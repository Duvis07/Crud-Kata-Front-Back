package co.com.sofka.crud.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


/**
 * Entidad que especifica que la clase es una entidad y está asignada a una tabla de base de datos
 */

@Entity
public class TodoModel {

    @Id
    @GeneratedValue
    private  Long id;
    private  String name;
    private  Boolean isCompleted;


    /**
     * Metododos get y set
     * @return
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getCompleted() {
        return isCompleted;
    }

    public void setCompleted(Boolean completed) {
        isCompleted = completed;
    }
}
