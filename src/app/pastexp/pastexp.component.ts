import { Component } from '@angular/core';
import { DataService, IPastExperience } from "../data.service";

@Component({
  selector: 'resume-pastexp',
  templateUrl: './pastexp.component.html',
  styleUrls: ['./pastexp.component.less']
})
export class PastexpComponent {
  public info: IPastExperience;

  constructor(private data: DataService) {
    this.info = data.pastExperience;
  }


}
