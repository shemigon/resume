import { Component } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public name: string;
  public email: string;
  public phone: string;

  constructor(private data: DataService) {
    this.name = data.personalInfo.name;
    this.email = data.personalInfo.email;
    this.phone = data.personalInfo.phone;
  }

}
