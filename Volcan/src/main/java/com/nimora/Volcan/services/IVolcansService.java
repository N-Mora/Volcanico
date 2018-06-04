package com.nimora.Volcan.services;

import java.util.List;

import com.nimora.Volcan.entities.Volcan;

public interface IVolcansService {

	List<Volcan> getVolcans();

	void setVolcans(List<Volcan> volcans);

	// Volcan getById(List<Volcan> volcans, int id);

	Volcan getById(int id);

	List<Volcan> addVolcan(Volcan v);

}