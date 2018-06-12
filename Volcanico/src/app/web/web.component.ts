import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Volcan } from '../_models';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  liste = '';
  volcan: Volcan;
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.http.get(this.url + 'all').subscribe(r => this.showReturn(r));
    this.http.get<Volcan>(this.url + 'get/1').subscribe(r => this.volcan = r);
  }

  showReturn(r) {
    this.liste = JSON.stringify(r);
    console.log(r);
  }


  
}


