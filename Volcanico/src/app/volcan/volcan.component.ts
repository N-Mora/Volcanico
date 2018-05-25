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

  param: string;
  volcans;

  constructor(private activatedRoute: ActivatedRoute, private volcanService: VolcanService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      p => this.param = p['id']
    );
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

}
