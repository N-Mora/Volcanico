import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolcanService } from '../_services/volcan.service';
import { Volcan } from '../_models';

@Component({
  selector: 'app-volcan',
  templateUrl: './volcan.component.html',
  styleUrls: ['./volcan.component.css']
})
export class VolcanComponent implements OnInit {

  param: number;
  volcan;
  edit = false;

  constructor(private activatedRoute: ActivatedRoute, private volcanService: VolcanService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.afficherVolcan(p['id']));
  }

  afficherVolcan(id: string) {
    this.param = +id; //Convertir id en number si c'est un string
    this.volcan = this.volcanService.getVolcanById(this.param);
    //this.volcan = this.volcanService.getVolcanById(+id); 
  }

  editVolcan() {
    this.volcan = this.volcanService;
    this.edit = true;

  }

}
