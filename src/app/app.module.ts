import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { JobsComponent } from './jobs/jobs.component';
import { PastexpComponent } from './pastexp/pastexp.component';
import { EducationComponent } from './education/education.component';
import { RouterModule } from "@angular/router";
import { DataResolver } from "./data.resolver";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./data.service";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SummaryComponent,
    SpecialtiesComponent,
    JobsComponent,
    PastexpComponent,
    EducationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        resolve: {
          resume: DataResolver,
        }
      }
    ])

  ],
  providers: [
    DataService,
    DataResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
