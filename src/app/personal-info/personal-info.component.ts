import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo, Resume } from "../types";

@Component({
  selector: 'resume-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent implements OnInit {
  @Input() resume: Resume;

  public info: PersonalInfo;

  constructor() {}

  ngOnInit() {
    this.info = this.resume.personalInfo;
  }

}
