import { Component, Input, OnInit } from '@angular/core';
import { Resume } from "../types";

@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  @Input() resume: Resume;

  public items: string[];

  constructor() {}

  ngOnInit(): void {
    this.items = this.resume.education;
  }


}
