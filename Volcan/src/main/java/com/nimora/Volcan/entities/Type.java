package com.nimora.Volcan.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Type {

	private String label;
	@Id
	@Column(name = "id_type")
	private int id;

	// @OneToMany(mappedBy = "type")
	// @JsonManagedReference(value = "type")
	// private List<Volcan> volcans;

	public Type(String label) {
		super();
		this.label = label;

	}

	public Type() {
		super();
	}

	// public void addVolcan(Volcan volcano) {
	// volcans.add(volcano);
	// volcano.setType(this);
	// }
	//
	// public void removeVolcan(Volcan volcano) {
	// volcano.setType(null);
	// this.volcans.remove(volcano);
	// }

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
