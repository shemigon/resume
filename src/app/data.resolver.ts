import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Resume } from "./types";
import { DataService } from "./data.service";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class DataResolver implements Resolve<Resume> {
  constructor(private ds: DataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Resume> {
    return this.ds.load();
  }
}
