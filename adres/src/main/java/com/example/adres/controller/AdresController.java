package com.example.adres.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.adres.model.Adres;
import com.example.adres.service.AdresServicelmpl;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdresController {
	
	@Autowired
	private AdresServicelmpl adresService;
	
	@GetMapping("/adres")
	public ResponseEntity<List<Adres>> getAllAdres(){
		return ResponseEntity.ok().body(adresService.getAllAdres());
	}
	@GetMapping("/adres/{id}")
	public ResponseEntity<Adres> getAdresById(@PathVariable long id){
		return ResponseEntity.ok().body(adresService.getAdresById(id));
	}
	
	@PostMapping("/adres")
	public ResponseEntity<Adres> createAdres(@RequestBody Adres adres){
		return ResponseEntity.ok().body(adresService.createAdres(adres));
	}
	
	@PutMapping("/adres/{id}")
	public ResponseEntity<Adres> updateAdres(@PathVariable long id,@RequestBody Adres adres){
		adres.setId(id);
		return ResponseEntity.ok().body(adresService.updateAdres(adres));
	}
	
	@DeleteMapping("/adres/{id}")
	public HttpStatus deleteAdres(@PathVariable long id){
		this.adresService.deleteAdres(id);
		return HttpStatus.OK;
		
	}
	
	
	
	
	
	
	
	
	
}