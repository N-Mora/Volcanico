package com.nimora.Volcan.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nimora.Volcan.entities.Volcan;
import com.nimora.Volcan.services.IVolcansService;

@CrossOrigin
@RestController
public class VolcanController implements IVolcanController {

	@Autowired
	IVolcansService volcanService;

	@RequestMapping("/")
	public String Hello() {
		return "hello";
	}

	@RequestMapping("/all")
	public List<Volcan> getAll() {
		return this.volcanService.getAll();
	}

	@RequestMapping("/get/{id}")
	public Volcan getById(@PathVariable("id") int id) {
		return this.volcanService.getById(id);
	}

	@RequestMapping("/post")
	public List<Volcan> addVolcan(@RequestBody Volcan v) {
		this.volcanService.addVolcan(v);
		return this.getAll();
	}

	@RequestMapping("/delete/{id}")
	public List<Volcan> deleteVolcan(@PathVariable("id") int id) {
		this.volcanService.deleteById(id);
		return this.getAll();
	}

	@RequestMapping("/edit")
	public List<Volcan> putVolcan(@RequestBody Volcan v) {
		this.volcanService.putVolcan(v);
		return this.getAll();
	}

	@Override
	public IVolcansService getVolcans() {
		return volcanService;
	}

	@Override
	public void setVolcans(IVolcansService volcanService) {
		this.volcanService = volcanService;
	}

}
