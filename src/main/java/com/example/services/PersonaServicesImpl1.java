package com.example.services;
import com.example.model.Persona;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

public class PersonaServicesImpl1 implements PersonaServices{

    List<Persona> personaList=new ArrayList<>();

    @Override
    public void savePersona(Persona p) {
        personaList.add(p);
    }

    @Override
    public List<Persona> getPersonas() {
        return personaList;
    }

    @Override
    public void updatePersona(Persona p) {
    	for (int i = 0; i < personaList.size(); i++) {
			if(p.getId().equals(personaList.get(i).getId())){
    	                personaList.set(i, p);
			}
		}
    }


    @Override
    public Persona getPersona(Long pId) {
        Persona ans=null;
        for (Persona pe :
                personaList) {
            if(pe.getId().equals(pId)){
                ans=pe;
                break;
            }
        }
        return ans;
    }
}
