package com.example.controller;

import com.example.model.Persona;
import com.example.services.PersonaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8080", methods = {RequestMethod.PUT,RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping(value = "/persona")
public class PersonaController {

    @Autowired
    private PersonaServices ps;

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPersonas(){
    	List<Persona> ans=ps.getPersonas();
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(method = RequestMethod.GET, path = "/{personaId}")
    public ResponseEntity<?> getPersona(@PathVariable Long personaId) {
		Persona ans=ps.getPersona(personaId);
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(method = RequestMethod.POST, path = "/new")
    public ResponseEntity<?> postPersona(@RequestBody Persona p) {
        ps.savePersona(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "http://localhost:8080", methods = RequestMethod.PUT)
    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> updatePersona(@RequestBody Persona p) {
        ps.updatePersona(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
