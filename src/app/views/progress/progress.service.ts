import { Injectable } from '@angular/core';
import { AppliedJob } from 'app/class/applied-job';
import { Observable, of } from 'rxjs';
import { fakeAppliedJobs } from './data';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  getAppliedJobs(): Observable<AppliedJob[]> {
    return of(fakeAppliedJobs);
  }

}
