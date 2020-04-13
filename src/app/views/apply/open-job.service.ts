import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { fakeJobs } from './data';
import { Job } from 'app/class';

@Injectable({
  providedIn: 'root'
})
export class OpenJobService {

  constructor() { }

  public getOpenJobs(): Observable<Job[]> {
    return of(fakeJobs);
  }
}
