package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SwaggerSpringDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwaggerSpringDemoApplication.class, args);
		System.out.println("Swagger application Working....!");
	}

}