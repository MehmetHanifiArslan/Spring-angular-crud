package com.example.adres.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.adres.exception.ResourceNotFoundException;
import com.example.adres.model.Adres;
import com.example.adres.repository.AdreslerRepository;



@Service
@Transactional
public class AdresServicelmpl implements AdresService{

	@Autowired
	private AdreslerRepository adreslerRepository;

	@Override
	public Adres createAdres(Adres adres) {
		return adreslerRepository.save(adres);
	}

	@Override
	public Adres updateAdres(Adres adres) {
		Optional<Adres> adresDb = this.adreslerRepository.findById(adres.getId());

		if (adresDb.isPresent()) {
			Adres adresUpdate = adresDb.get();
			adresUpdate.setId(adres.getId());
			adresUpdate.setMahalle(adres.getMahalle());
			adresUpdate.setSokak(adres.getSokak());
			adresUpdate.setNo(adres.getNo());
			adresUpdate.setDaire(adres.getDaire());
			adreslerRepository.save(adresUpdate);
			return adresUpdate;
		} else {
			throw new ResourceNotFoundException("Kayıt bulunamadı: " + adres.getId());
		}

	}
	
	

	@Override
	public List<Adres> getAllAdres() {
		
		return this.adreslerRepository.findAll();
	}

	
	@Override
	public Adres getAdresById(long adresId) {
		Optional<Adres> adresDb = this.adreslerRepository.findById(adresId);

		if (adresDb.isPresent()) {
			return adresDb.get();
		}  else {
			throw new ResourceNotFoundException("Kayıt bulunamadı: " + adresId);
		}


	}

	@Override
	public void deleteAdres(long adresId) {
		Optional<Adres> adresDb = this.adreslerRepository.findById(adresId);

		if (adresDb.isPresent()) {
			this.adreslerRepository.delete(adresDb.get());
		}  else {
			throw new ResourceNotFoundException("Kayıt bulunamadı: " + adresId);
		}


	

	}}
