package com.nimora.Volcan.entities;

public class Volcan {

	private static int count = 1;
	private String name;
	private String location;
	private String type;
	private String origin;
	private String funFact;
	private float lastEruption;
	private int id;
	private String photo;
	private double latitude;
	private double longitude;

	/**
	 * @param name
	 * @param location
	 * @param type
	 * @param origin
	 * @param funFact
	 * @param lastEruption
	 * @param photo
	 * @param latitude
	 * @param longitude
	 */
	public Volcan(String name, String location, String type, String origin, String funFact, float lastEruption,
			String photo, double latitude, double longitude) {
		super();
		this.name = name;
		this.location = location;
		this.type = type;
		this.origin = origin;
		this.funFact = funFact;
		this.lastEruption = lastEruption;
		this.photo = photo;
		this.latitude = latitude;
		this.longitude = longitude;
		this.id = Volcan.count++;

	}

	public Volcan() {
		this.id = Volcan.count++;
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

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
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

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
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

	public static int getCount() {
		return count;
	}

	public static void setCount(int count) {
		Volcan.count = count;
	}
}
