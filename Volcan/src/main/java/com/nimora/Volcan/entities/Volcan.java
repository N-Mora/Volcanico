package com.nimora.Volcan.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity // Previent qu'il existe une table sql dans la BDD qui porte le meme nom que la
		// classe
public class Volcan {

	@Column
	private String name;
	@Column // Presente dans la base de donnees sous forme d'une colonne avec le meme nom.
	private String location;

	@ManyToOne
	@JoinColumn(name = "type", referencedColumnName = "id_type", foreignKey = @ForeignKey(name = "type"))
	private Type type;

	@ManyToOne
	@JoinColumn(name = "origin", referencedColumnName = "id_origin", foreignKey = @ForeignKey(name = "origin"))
	private Origin origin;

	@Column
	private String funFact;
	@Column
	private float lastEruption;

	@Id // Contient le @column et contient également une annotation qui dit que l'Id est
		// généré par la BDD
	private int id;
	@Column
	private String photoPath;
	@Column
	private double latitude;
	@Column
	private double longitude;

	/**
	 * @param name
	 * @param location
	 * @param type
	 * @param origin
	 * @param funFact
	 * @param lastEruption
	 * @param id
	 * @param photoPath
	 * @param latitude
	 * @param longitude
	 */
	public Volcan(String name, String location, Type type, Origin origin, String funFact, float lastEruption, int id,
			String photoPath, double latitude, double longitude) {
		super();
		this.name = name;
		this.location = location;
		this.type = type;
		this.origin = origin;
		this.funFact = funFact;
		this.lastEruption = lastEruption;
		this.id = id;
		this.photoPath = photoPath;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	public Volcan() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Origin getOrigin() {
		return origin;
	}

	public void setOrigin(Origin origin) {
		this.origin = origin;
	}

	public String getFunFact() {
		return funFact;
	}

	public void setFunFact(String funFact) {
		this.funFact = funFact;
	}

	public float getLastEruption() {
		return lastEruption;
	}

	public void setLastEruption(float lastEruption) {
		this.lastEruption = lastEruption;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

}
