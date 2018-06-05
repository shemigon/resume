import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'resume-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.less']
})
export class SpecialtiesComponent {
  public items: string[][];

  constructor(private data: DataService) {
    this.items = data.specialties;
  }

}
