import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'resume-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent {
  public items;

  constructor(private data: DataService) {
    let year = (new Date()).getFullYear();
    this.items = data.summary.map(function (i) {
      if (i.year) {
        i.year = year - i.year;
      }
      return i;
    });
  }


}
