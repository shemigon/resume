import { Component, Input, OnInit } from '@angular/core';
import { Resume } from "../types";

@Component({
  selector: 'resume-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.less']
})
export class SpecialtiesComponent implements OnInit {
  @Input() resume: Resume;

  public items: string[][];

  constructor() {}

  ngOnInit(): void {
    this.items = this.resume.specialties;
  }

}
