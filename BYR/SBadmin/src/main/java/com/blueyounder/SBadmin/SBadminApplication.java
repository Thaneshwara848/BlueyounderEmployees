package com.blueyounder.SBadmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import de.codecentric.boot.admin.server.config.EnableAdminServer;

@SpringBootApplication
@EnableAdminServer
public class SBadminApplication {

	public static void main(String[] args) {
		SpringApplication.run(SBadminApplication.class, args);
		System.out.println("Actutro working ");
	}

}
