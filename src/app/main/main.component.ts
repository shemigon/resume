import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Resume } from "../types";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'resume-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  public resume:Resume;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.resume = this.route.snapshot.data.resume;
  }
}
