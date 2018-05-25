import { Component, OnInit, Input } from '@angular/core';
import { Volcan } from '../_models';

@Component({
  selector: 'app-volcan-detail',
  templateUrl: './volcan-detail.component.html',
  styleUrls: ['./volcan-detail.component.css']
})
export class VolcanDetailComponent implements OnInit {

  @Input() volcanDetail: Volcan;



  constructor() { }

  ngOnInit() {
  }

}
