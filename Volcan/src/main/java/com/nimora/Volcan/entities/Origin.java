package com.nimora.Volcan.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Origin {

	private String label;

	@Column(name = "id_origin")
	@Id
	private int id;

	// @OneToMany(mappedBy = "origin")
	// @JsonManagedReference(value = "origin")
	// private List<Volcan> volcans;

	public Origin(String label) {
		super();
		this.label = label;

	}

	public Origin() {
		super();
	}

	// public void addVolcan(Volcan volcano) {
	// volcans.add(volcano);
	// volcano.setOrigin(this);
	// }
	//
	// public void removeVolcan(Volcan volcano) {
	// volcano.setOrigin(null);
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
