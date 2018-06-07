import { Component, Input } from '@angular/core';
import { PastExperience } from "../types";

@Component({
  selector: 'resume-pastexp',
  templateUrl: './pastexp.component.html',
  styleUrls: ['./pastexp.component.less']
})
export class PastexpComponent {
  @Input() info: PastExperience;

  constructor() {}
}
