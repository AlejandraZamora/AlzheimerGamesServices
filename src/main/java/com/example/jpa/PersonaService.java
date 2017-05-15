package com.example.jpa;

import com.example.model.Persona;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class PersonaService implements GenericService<Persona, Long> {

    private final PersonaRepository personaRepository;

    public PersonaService(final PersonaRepository personaRepository) {

        this.personaRepository=personaRepository;
    }

    @Override
    public Long getId(Persona entity) {
        return entity.getId();
    }

    @Override
    public CrudRepository<Persona, Long> getRepository() {
        return this.personaRepository;
    }

    @Override
    public Persona save(Persona entity) {
        return GenericService.super.save(entity);
    }
}
