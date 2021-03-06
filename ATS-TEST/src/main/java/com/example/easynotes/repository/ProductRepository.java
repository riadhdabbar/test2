package com.example.easynotes.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import com.example.easynotes.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

	  @RestResource(path="searchByName", rel="searchByName")


	    Page<Product> findById(@Param("id")Long aLong, Pageable pageable);
	
	
}
