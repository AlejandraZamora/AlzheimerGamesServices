package com.example.services;
import com.example.model.Persona;
import org.springframework.stereotype.Service;
import com.example.jpa.GenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonaServicesImpl2 implements PersonaServices{

    @Autowired
    private GenericService ps;
    
    public PersonaServicesImpl2(final GenericService gs){
        this.ps=gs;
    }

    @Override
    public void savePersona(Persona p) {
        ps.save(p);
    }

    @Override
    public List<Persona> getPersonas() {
	ArrayList<Persona> ans =new ArrayList<Persona>();
	for (Object o : ps.findAll()) {
	ans.add((Persona) o);
	}
	return ans;
    }

    @Override
    public void updatePersona(Persona p) {
    	ps.update(p);
    }


    @Override
    public Persona getPersona(Long pId) {
        return (Persona) ps.get(pId);
    }
}
