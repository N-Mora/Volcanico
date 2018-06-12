package com.nimora.Volcan.services;

import java.util.List;

import com.nimora.Volcan.entities.Volcan;
import com.nimora.Volcan.repositories.IVolcanRepository;

public interface IVolcansService {

	// Volcan getById(List<Volcan> volcans, int id);

	List<Volcan> getAll();

	Volcan getById(int id);

	Volcan addVolcan(Volcan v);

	Volcan putVolcan(Volcan v);

	List<Volcan> deleteById(int id);

	IVolcanRepository getiVolcanRepository();

	void setiVolcanRepository(IVolcanRepository iVolcanRepository);

}