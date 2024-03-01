package com.example.demo.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.model;
@Service
public class service2 {
	
	@Autowired
	RestTemplate restTemplate;
	
	final String ROOT_URI = "http://localhost:9999/getProduct";
	
	public List<model> findAllMyModel() {
		
		ResponseEntity<model[]> response = restTemplate.getForEntity(ROOT_URI, model[].class);
		
		return Arrays.asList(response.getBody());
		
		
	}
	
	public Object fetchProductListById(int id) {
		
			ResponseEntity<model[]> response = restTemplate.getForEntity(ROOT_URI, model[].class,id);
		return Arrays.asList(response.getBody());
	}
	
}


