package com.cpe.springboot.store.controller;

import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.store.StoreTransaction;



public interface StoreRepository extends CrudRepository<StoreTransaction, Integer> {
	

}
