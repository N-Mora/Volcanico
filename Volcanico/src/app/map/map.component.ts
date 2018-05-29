import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { VolcanDetailComponent } from '../volcan-detail/volcan-detail.component';
import { ActivatedRoute } from '@angular/router';
import { VolcanService } from '../_services/volcan.service';
import { Volcan } from '../_models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  param: number;
  volcans = [];
  volcan: Volcan;
  volcanSelected;

  constructor(private activatedRoute: ActivatedRoute, private volcanService: VolcanService) { }

  myIcon = L.icon({
    iconUrl: 'assets/images/images_icone.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -40]
  });

  myFrugalMap;

  ngOnInit() {

    this.myFrugalMap = L.map('volcanoMap').setView([43.69662, 4.03598], 10);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      { attribution: 'Volcano Map' }).addTo(this.myFrugalMap);

    for (let i = 0; i < this.volcanService.volcans.length; i++) {
      this.addMarker(this.volcanService.volcans[i].latitude, this.volcanService.volcans[i].longitude, this.volcanService.volcans[i].name);
    }

    this.activatedRoute.params.subscribe((p) => this.subscribeVolcan(p));
  }

  subscribeVolcan(p) {
    if (p && p['latitude'] && p['longitude']) {
      this.afficherVolcanMap(p['latitude'], p['longitude']);
    }
  }

  afficherVolcanMap(lat, lng) {
    this.myFrugalMap.setView([lat, lng], 8);
  }

  addMarker(lat, lng, popup) {
    L.marker([lat, lng], { icon: this.myIcon }).bindPopup(popup).addTo(this.myFrugalMap).on('click', () => this.eventOnClick(lat, lng));
  }


  eventOnClick(lat, lng) {
    this.volcan = this.volcanService.getByCoordinates(lat, lng);
    this.selectVolcan(this.volcan);
    this.setVolcanSelected();
  }

  selectVolcan(volcan) {
    if (this.volcanSelected === volcan) {
      this.volcanSelected = new Volcan();
    } else { this.volcanSelected = volcan; }
  }

  setVolcanSelected() {
    this.volcanService.setVolcanSelected(this.volcanSelected);
  }
}


