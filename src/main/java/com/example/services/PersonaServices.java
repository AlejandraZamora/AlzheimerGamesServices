package com.example.services;
import com.example.model.Persona;
import java.util.List;

public interface PersonaServices {
    public void savePersona(Persona p);
    public List<Persona> getPersonas();
    public void updatePersona(Persona p);
    public Persona getPersona(Long pId);
}
