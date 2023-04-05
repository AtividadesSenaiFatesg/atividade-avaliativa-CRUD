package com.example.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal")
public class AnimalController {

    @Autowired
    private AnimalDAO animalDAO;

    @GetMapping
    public List<Animal> listar(){
        return animalDAO.findAll();
    }

    @PostMapping
    public void salvar(@RequestBody Animal animal){
        animalDAO.save(animal);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id){
        animalDAO.deleteById(id);
        listar();
    }
}
