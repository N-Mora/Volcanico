package com.nimora.Volcan.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nimora.Volcan.entities.Volcan;
import com.nimora.Volcan.repositories.IVolcanRepository;

@Service
public class VolcanService implements IVolcansService {

	// private List<Volcan> Volcans;

	@Autowired
	IVolcanRepository iVolcanRepository;

	public VolcanService() {
		super();

		// this.Volcans = new ArrayList<>(Arrays.asList(
		// new Volcan("Yellowstone", "Etats-Unis", "Ultra-plinien supervolcan (VEI=8)",
		// "hot-spot",
		// "4 257 177 touristes par an", -600000, "yellowstone.jpg", 44.412264,
		// -110.723184),
		// new Volcan("Vesuve", "Italie", "Plinien (VEI=4-6)", "rift", "Destruction
		// Pompei", 1944, "Vesuve.jpg",
		// 40.8223, 14.4289),
		// new Volcan("Kilauea", "Etats-Unis(Hawai)", "Hawaien (VEI=0-1)", "hotspot",
		// "Lac de lave", 2018,
		// "kilauea.jpg", 19.40689, -155.28338),
		// new Volcan("Misti", "Perou", "Vulcanien Plinien (VEI=4)", "subduction",
		// "2eme volcan actif le plus haut (5825m)", 1985, "misti.jpg", -16.2900,
		// -71.4053),
		// new Volcan("Erebus", "Antarctique", "Plinien/Ultra-Plinien (VEI=6)",
		// "hotspot", "Lac de lave", 1972,
		// "erebus.jpg", -77.53, 167.17),
		// new Volcan("Puy de dôme", "France", "Vulcanien (VEI=4)", "rift", "Edifice
		// Monogénique", -5760,
		// "puyDeDome.jpg", 45.7720012, 2.96240461)));
	}

	@Override
	public List<Volcan> deleteById(int id) {
		// this.Volcans.remove(getById(id));
		// return Volcans;
		this.iVolcanRepository.deleteById(id);
		return this.iVolcanRepository.findAll();
	}

	// @Override
	// public Volcan getById(List<Volcan> volcans, int id) {
	// Volcan result = null;
	// for (Volcan temp : volcans) {
	// if (id == temp.getId()) {
	// result = temp;
	// }
	// }
	// return result;
	//
	// }

	@Override
	public Volcan getById(int id) {

		// return Volcans.stream().filter(p -> p.getId() == id).findFirst().get();
		return this.iVolcanRepository.getOne(id);
	}

	public Volcan getByCoordinate(double latitude, double longitude) {
		return this.iVolcanRepository.getByLatitudeAndLongitude(latitude, longitude);
	}

	@Override
	public Volcan addVolcan(Volcan v) {
		// this.Volcans.add(v);
		// return Volcans;
		return this.iVolcanRepository.save(v);
	}

	@Override
	public List<Volcan> getAll() {
		return this.iVolcanRepository.findAll();
	}

	@Override
	public Volcan putVolcan(Volcan v) {

		// boolean b = false;
		// for (Volcan temp : Volcans) {
		// if (v.getId() == temp.getId()) {
		// temp.setName(v.getName());
		// temp.setLocation(v.getLocation());
		// temp.setFunFact(v.getFunFact());
		// temp.setLastEruption(v.getLastEruption());
		// temp.setLatitude(v.getLatitude());
		// temp.setLongitude(v.getLongitude());
		// temp.setOrigin(v.getOrigin());
		// temp.setType(v.getType());
		// temp.setPhotoPath(v.getPhotoPath());
		// b = true;
		// }
		// }
		// if (b == true) {
		// return true;
		// } else {
		// addVolcan(v);
		// }
		// return b;

		return this.iVolcanRepository.save(v);

	}

	@Override
	public IVolcanRepository getiVolcanRepository() {
		return iVolcanRepository;
	}

	@Override
	public void setiVolcanRepository(IVolcanRepository iVolcanRepository) {
		this.iVolcanRepository = iVolcanRepository;
	}

}
