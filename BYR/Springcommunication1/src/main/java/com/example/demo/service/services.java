package com.example.demo.service;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.model;
import com.example.demo.repo.myRepo;

@Service
public class services {
	@Autowired
	private myRepo repo;
	
	public List<model> findAllMyModel(){
		return repo.findAll();
	}
	public Optional<model> fetchProductListById(int id){
		
		return repo.findById(id);
	
	}
	
}
