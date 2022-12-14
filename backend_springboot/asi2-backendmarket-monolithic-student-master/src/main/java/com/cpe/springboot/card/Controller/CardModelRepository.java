package com.cpe.springboot.card.Controller;


import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.card.CardModel;
import com.cpe.springboot.user.UserModel;

import java.util.List;

public interface CardModelRepository extends CrudRepository<CardModel, Integer> {
    List<CardModel> findByUser(UserModel u);
}
