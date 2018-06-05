import { Component, Input, OnInit } from '@angular/core';
import { Resume } from "../types";

@Component({
  selector: 'resume-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  @Input() resume: Resume;

  public items;

  constructor() {}

  ngOnInit(): void {
    let year = (new Date()).getFullYear();
    this.items = this.resume.summary.map(function (i) {
      if (i.year) {
        i.year = year - i.year;
      }
      return i;
    });
  }


}
