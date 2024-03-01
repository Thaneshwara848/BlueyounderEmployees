package com.example.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.model;
public interface myRepo extends JpaRepository<model,Integer>{
	
}