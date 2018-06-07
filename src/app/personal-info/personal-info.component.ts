import { Component, Input } from '@angular/core';
import { PersonalInfo } from "../types";

@Component({
  selector: 'resume-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent {
  @Input() info: PersonalInfo;

  constructor() {}
}
