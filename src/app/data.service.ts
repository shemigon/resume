import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Resume } from "./types";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs/internal/Observable";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class DataService {
  private url = "assets/resume.json";

  public resume: Resume = new Resume();

  constructor(private http: HttpClient) {}

  load(): Observable<Resume> {
    return this.http.get<Resume>(this.url)
      .pipe(
        tap((resume: Resume) => {
          this.resume = resume;
        })
      );
  }
}
