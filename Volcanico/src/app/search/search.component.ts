import { Component, OnInit, Input } from '@angular/core';
import { VolcanService } from '../_services/volcan.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  volcans;
  resultList = [];
  wordsToSearch: string;

  constructor(private volcanService: VolcanService) { }


  ngOnInit() {
    this.volcans = this.volcanService.getVolcans();
  }

  search() {
    if (this.wordsToSearch === '') {
      this.resultList = null;
    } else {
      this.resultList = this.volcans.filter(
      e => e.name.toUpperCase().indexOf(this.wordsToSearch.toUpperCase()) !== -1);
    }

  }
}







