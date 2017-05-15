package com.example.jpa;

import com.example.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;


@Transactional
public interface PersonaRepository extends JpaRepository<Persona, Long>  {
}

