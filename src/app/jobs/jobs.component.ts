import { Component, Input, OnInit } from '@angular/core';
import { Job, Resume } from "../types";

@Component({
  selector: 'resume-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent implements OnInit {
  @Input() resume: Resume;

  public items: Job[];

  constructor() {}

  ngOnInit(): void {
    this.items = this.resume.jobs;
  }

}
