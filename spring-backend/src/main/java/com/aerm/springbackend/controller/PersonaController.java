package com.aerm.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aerm.springbackend.model.Persona;
import com.aerm.springbackend.repository.PersonaRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PersonaController {
    
    @Autowired
    private PersonaRepository personaRepository;

    /**
     * Get all personas from database
     */
    @GetMapping("/persona")
    public List<Persona> getAllPersonas(){
        return personaRepository.findAll();
    }

    /**
     * Create a new persona
     */
    @PostMapping("/persona/new")
    public Persona insertPersona(@RequestBody Persona persona){
        return personaRepository.save(persona);
    }
}
