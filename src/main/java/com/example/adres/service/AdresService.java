package com.example.adres.service;

import java.util.List;

import com.example.adres.model.Adres;


public interface AdresService {
	Adres createAdres(Adres adres);

	Adres updateAdres(Adres adres);

	List<Adres> getAllAdres();

	Adres getAdresById(long adresId);

	void deleteAdres(long id);

}
