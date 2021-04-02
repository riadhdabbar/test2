package com.example.easynotes.controller;

import java.io.InputStream;
import java.net.URL;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.easynotes.exception.ResourceNotFoundException;
import com.example.easynotes.model.Product;
import com.example.easynotes.repository.ProductRepository;
import com.mysql.cj.xdevapi.JsonArray;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {
	
	 @Autowired
	 ProductRepository productRepository;

	    @GetMapping("/product")
	    public List<Product> getAllProducts() {
	        return productRepository.findAll();
	    }

	    @GetMapping("/product/{id}")
	    public Product getProductById(@PathVariable(value = "id") Long productId) {
	        return productRepository.findById(productId)
	                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", productId));
	    }
	    

	    @GetMapping("/productPage")
	    public Page<Product> showPage (@RequestParam(defaultValue="0") int page){
	    
	        return productRepository.findAll(PageRequest.of(page,2));
	    }
	    
	    @GetMapping("/productPagee")
	    public ResponseEntity<Page<Product>> findAllPerson(Pageable pageable) {

	        Page<Product> page = productRepository.findAll(pageable);
	        return new ResponseEntity<>(page, HttpStatus.OK);
	    }
			
 
	  
	    

	
}
