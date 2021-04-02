package com.example.easynotes.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.example.easynotes.model.Product;
import com.example.easynotes.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	
	@Cacheable("cricketers")
	public List<Product> getAllPlayers(){
		return productRepository.findAll();
	}

	
	public Product findById(Long id){
		return productRepository.findById(id).orElseThrow(() ->
				new NoSuchElementException("Cricketer does not exist" + id)
		);
	}
	
	
}
