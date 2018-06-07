import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.less']
})
export class SpecialtiesComponent {
  @Input() items: string[][];

  constructor() {}
}
