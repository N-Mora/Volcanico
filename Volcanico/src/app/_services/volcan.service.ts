import { Injectable } from '@angular/core';
import { Volcan } from '../_models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolcanService {

  public volcans = [];
    /*new Volcan('Yellowstone', 'Etats-Unis', 'Ultra-plinien supervolcan (VEI=8)', 'hot-spot',
      '4 257 177 touristes par an', -600000, 'yellowstone.jpg', 44.412264, -110.723184),
    new Volcan('Vesuve', 'Italie', 'Plinien (VEI=4-6)', 'rift', 'Destruction Pompei', 1944, 'Vesuve.jpg', 40.8223, 14.4289),
    new Volcan('Kilauea', 'Etats-Unis(Hawai)', 'Hawaien (VEI=0-1)', 'hotspot', 'Lac de lave', 2018, 'kilauea.jpg', 19.40689, -155.28338),
    new Volcan('Misti', 'Perou', 'Vulcanien Plinien (VEI=4)', 'subduction',
      '2eme volcan actif le plus haut (5825m)', 1985, 'misti.jpg', -16.2900, -71.4053),
    new Volcan('Erebus', 'Antarctique', 'Plinien/Ultra-Plinien (VEI=6)', 'hotspot', 'Lac de lave', 1972, 'erebus.jpg', -77.53, 167.17),
    new Volcan('Puy de dôme', 'France', 'Vulcanien (VEI=4)', 'rift', 'Edifice Monogénique', -5760, 'puyDeDome.jpg', 45.7720012, 2.96240461)
  ];*/
  volcanSelected = new Volcan();
  volcan: Volcan;

  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }


  // getVolcans() {
  //   return this.volcans;
  // }

  // getVolcanById(id: number): Volcan {
  //   /*for (let i = 0; i < this.volcans.length; i++) {
  //     if (this.volcans[i].id === id) {
  //       return this.volcans[i];
  //     }
  //   }
  //   return null;*/
  //   return this.volcans.filter(v => v.id === id)[0];
  // }

  getByCoordinates(lat: number, lng: number): Volcan {
    return this.volcans.filter(v => v.latitude === lat && v.longitude === lng)[0];
  }

  setVolcanSelected(volcanSelected) {
     this.volcanSelected = volcanSelected;
  }

  getAll() {
    return this.http.get<Volcan[]>(this.url + 'all');
  }

  getById(id: number) {
    return this.http.get<Volcan>(this.url + 'get/' + id);
  }

  addVolcan(v: Volcan) {
    this.http.post<Volcan>(this.url + 'post', v);
  }

  deleteVolcan(id: number) {
    this.http.delete<Volcan>(this.url + 'delete/' + id);
  }

  putVolcan(v: Volcan) {
    this.http.put<Volcan>(this.url + 'edit', v);
  }

}
