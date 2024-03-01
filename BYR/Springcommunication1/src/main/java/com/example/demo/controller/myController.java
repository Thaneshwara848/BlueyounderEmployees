package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.model;
import com.example.demo.service.services;

@RestController
public class myController {
	
	@Autowired
	private services serv;
	
	@GetMapping("/getProduct")
	public List<model> FindAllModel() {
		List<model> model = new ArrayList<model>();
		model = serv.findAllMyModel();
		return model;
		
	}
	
	// get based id 
	
	
	
}
