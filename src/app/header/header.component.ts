import { Component, Input, OnInit } from '@angular/core';
import { Resume } from "../types";

@Component({
  selector: 'resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() resume: Resume;

  public name: string;
  public email: string;
  public phone: string;

  constructor() {}

  ngOnInit() {
    this.name = this.resume.personalInfo.name;
    this.email = this.resume.personalInfo.email;
    this.phone = this.resume.personalInfo.phone;
  }

}
