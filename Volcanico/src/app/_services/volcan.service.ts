import { Injectable } from '@angular/core';
import { Volcan } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class VolcanService {

  volcans = [
    new Volcan('Yellowstone', 'Etats-Unis', 'Ultra-plinien supervolcan (VEI=8)', 'hot-spot',
      '4 257 177 touristes par an', -600000),
    new Volcan('Vesuve', 'Italie', 'Plinien (VEI=4-6)', 'rift', 'Destruction Pompei', 1944),
    new Volcan('Kilauea', 'Etats-Unis(Hawai)', 'Hawaien (VEI=0-1)', 'hotspot', 'Lac de lave', 2018),
    new Volcan('Misti', 'Perou', 'Vulcanien Plinien (VEI=4)', 'subduction',
      '2eme volcan actif le plus haut (5825m)', 1985),
    new Volcan('Erebus', 'Antarctique', 'Plinien/Ultra-Plinien (VEI=6)', 'hotspot', 'Lac de lave', 1972),
    new Volcan('Puy de dôme', 'France', 'Vulcanien (VEI=4)', 'rift', 'Edifice Monogénique', -5760)
  ];

  constructor() { }


  getVolcans() {
    return this.volcans;
  }

}

