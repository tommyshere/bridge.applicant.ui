import { Component, OnInit, OnDestroy } from '@angular/core';
import { OpenJobService } from './open-job.service';
import { Subscription } from 'rxjs';
import { Job } from 'app/class';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit, OnDestroy {
  private _rx: Subscription;
  public jobs: Job[];

  constructor(
    private jobService: OpenJobService
  ) { }

  ngOnInit(): void {
    this._rx = this.jobService.getOpenJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  ngOnDestroy(): void {
    this._rx.unsubscribe();
  }

}
