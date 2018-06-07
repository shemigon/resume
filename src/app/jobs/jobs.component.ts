import { Component, Input } from '@angular/core';
import { Job } from "../types";

@Component({
  selector: 'resume-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent {
  @Input() items: Job[];

  constructor() {}
}
