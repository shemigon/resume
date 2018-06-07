import { Component, Input, OnInit } from '@angular/core';
import { SummaryItem } from "../types";

@Component({
  selector: 'resume-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  @Input() summary: SummaryItem[];

  public items;

  constructor() {}

  ngOnInit(): void {
    let year = (new Date()).getFullYear();
    this.items = this.summary.map(function (i) {
      if (i.year) {
        i.year = year - i.year;
      }
      return i;
    });
  }


}
