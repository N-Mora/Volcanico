import { Component, OnInit } from '@angular/core';
import { Volcan } from '../_models';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  edit = false;
  volcans = [
    new Volcan('Yellowstone', 'Etats-Unis', 'Ultra-plinien supervolcan (VEI=8)', 'hot-spot',
      '4 257 177 touristes par an', -600000),
    new Volcan('Vesuve', 'Italie', 'Plinien (VEI=4-6)', 'rift', 'Destruction Pompei', 1944),
    new Volcan('Kilauea', 'Hawaii', 'Hawaien (VEI=0-1)', 'hotspot', 'Lac de lave', 2018),
    new Volcan('Misti', 'Perou', 'Vulcanien Plinien (VEI=4)', 'subduction',
      '2eme volcan actif le plus haut (5825m)', 1985),
    new Volcan('Erebus', 'Antarctique', 'Plinien/Ultra-Plinien (VEI=6)', 'hotspot', 'Lac de lave', 1972),
    new Volcan('Puy de dôme', 'France', 'Vulcanien (VEI=4)', 'rift', 'Edifice Monogénique', -5760)
  ];
  volcan = new Volcan();

  constructor() { }

  addVolcan() {
    this.volcans.push(this.volcan);
    this.volcan = new Volcan();
  }

  editVolcan(id: number) {
    console.log(id);
    this.volcan = this.getVolcanById(id);
    this.edit = true;
  }

  getVolcanById(id: number): Volcan {
    /*for (let i = 0; i < this.volcans.length; i++) {
      if (this.volcans[i].id === id) {
        return this.volcans[i];
      }
    }
    return null;*/
    return this.volcans.filter(v => v.id === id)[0];
  }

  editOver() {
    this.edit = false;
    this.volcan = new Volcan();
  }

  ngOnInit() {
  }

}
