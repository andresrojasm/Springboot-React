package com.aerm.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/persona")
    public List<Persona> getAllPersonas(){
        return personaRepository.findAll();
    }
}
