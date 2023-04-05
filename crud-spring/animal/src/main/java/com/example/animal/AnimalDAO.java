package com.example.animal;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalDAO extends JpaRepository<Animal,Integer> {
}
