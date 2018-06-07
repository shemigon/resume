import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent {
  @Input() items: string[];

  constructor() {}
}
