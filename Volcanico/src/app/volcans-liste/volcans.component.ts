import { Component, OnInit } from '@angular/core';
import { Volcan } from '../_models';
import { VolcanService } from '../_services/volcan.service';

@Component({
  selector: 'app-volcans',
  templateUrl: './volcans.component.html',
  styleUrls: ['./volcans.component.css']
})
export class VolcansComponent implements OnInit {

  edit = false;
  volcans;
  volcan = new Volcan();
  list = [];

  volcanSelected: Volcan;

  constructor(private volcanService: VolcanService) { }

  addVolcan() {
    this.volcans.push(this.volcan);
    this.volcan = new Volcan();
  }

  editVolcan(id: number) {
    this.volcan = this.volcanService.getVolcanById(id);
    this.edit = true;
  }
/*
  getVolcanById(id: number): Volcan {
    for (let i = 0; i < this.volcans.length; i++) {
      if (this.volcans[i].id === id) {
        return this.volcans[i];
      }
    }
    return null;
    return this.volcans.filter(v => v.id === id)[0];
  }
*/
  editOver() {
    this.edit = false;
    this.volcan = new Volcan();
  }

  selected(v: Volcan) {
    this.volcanSelected = v;
  }

  ngOnInit() {
    this.volcans = this.volcanService.getVolcans();
    this.getAll();
  }

  getAll() {
    return this.volcanService.getAll().subscribe(r => this.list = r);
  }



}
