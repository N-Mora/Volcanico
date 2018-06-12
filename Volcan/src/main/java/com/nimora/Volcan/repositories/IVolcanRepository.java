package com.nimora.Volcan.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nimora.Volcan.entities.Volcan;

public interface IVolcanRepository extends JpaRepository<Volcan, Integer> {

	public Volcan getByLatitudeAndLongitude(double latitude, double longitude);

}
