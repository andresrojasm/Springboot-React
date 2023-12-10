package com.aerm.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aerm.springbackend.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Integer>{
    
}
