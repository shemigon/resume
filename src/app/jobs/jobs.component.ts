import { Component } from '@angular/core';
import { DataService, IJob } from "../data.service";

@Component({
  selector: 'resume-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent {
  public items: IJob[];

  constructor(private data: DataService) {
    this.items = data.jobs;
  }

}
