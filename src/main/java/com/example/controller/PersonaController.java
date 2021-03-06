package com.example.controller;

import com.example.model.Persona;
import com.example.services.PersonaServices;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping(value = "/persona")
public class PersonaController {

    @Autowired
    private PersonaServices ps;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<?> getPersonas(){
    	List<Persona> ans=ps.getPersonas();
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personaId}", produces = "application/json")
    public ResponseEntity<?> getPersona(@PathVariable Long personaId) {
		Persona ans=ps.getPersona(personaId);
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.POST, path = "/new")
    public ResponseEntity<?> postPersona(@RequestBody Persona p) {
        ps.savePersona(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePersona(@RequestBody Persona p) {
        ps.updatePersona(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.TEXT_PLAIN_VALUE)
    public ResponseEntity<?> postNewGame(@RequestBody String p) {
        ObjectMapper mapper = new ObjectMapper();
        Persona persona=null;
        try {
            persona=mapper.readValue(p, Persona.class);
        } catch (IOException e) {
            return new ResponseEntity<>(p, HttpStatus.BAD_REQUEST);
        }
        ps.updatePersona(persona);
        return new ResponseEntity<>(p, HttpStatus.ACCEPTED);
    }
}
