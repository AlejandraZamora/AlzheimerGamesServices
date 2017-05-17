package com.example.controller;

import com.example.model.AvanceJuego;
import com.example.model.Persona;
import com.example.services.PersonaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/persona")
public class PersonaController {

    @Autowired
    private PersonaServices ps;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getPersonas(){
    	List<Persona> ans=ps.getPersonas();
		if(ans!=null){
			return new ResponseEntity<>(ans , HttpStatus.ACCEPTED);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{personaId}")
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

    @RequestMapping(method = RequestMethod.POST,path = "/{personId}/newgame")
    public ResponseEntity<?> postNewGame(@RequestBody AvanceJuego a, @PathVariable Long personId) {
        Persona p=ps.getPersona(personId);
        List ng= p.getAvancesJuegos();
        ng.add(a);
        p.setAvancesJuegos(ng);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
