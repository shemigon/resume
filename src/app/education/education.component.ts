import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent {
  public items: string[];

  constructor(private data: DataService) {
    this.items = data.education;
  }


}
