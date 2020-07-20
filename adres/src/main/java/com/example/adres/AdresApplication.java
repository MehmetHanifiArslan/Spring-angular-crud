package com.example.adres;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AdresApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdresApplication.class, args);
		System.out.println("Bağlantı başarılı");
	}

}
