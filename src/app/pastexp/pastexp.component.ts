import { Component, Input, OnInit } from '@angular/core';
import { PastExperience, Resume } from "../types";

@Component({
  selector: 'resume-pastexp',
  templateUrl: './pastexp.component.html',
  styleUrls: ['./pastexp.component.less']
})
export class PastexpComponent implements OnInit {
  @Input() resume: Resume;

  public info: PastExperience;

  constructor() {}

  ngOnInit(): void {
    this.info = this.resume.pastExperience;
  }


}
