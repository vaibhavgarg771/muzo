package org.iitr.muzo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"org.iitr.muzo.dao", "org.iitr.muzo.models", "org.iitr.muzo.services", "org.iitr.muzo.controller"})
public class MuzoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MuzoApplication.class, args);
	}

}
