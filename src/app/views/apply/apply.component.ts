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
  public detailedJob: Job;
  public showMoreCard = false;

  constructor(
    private jobService: OpenJobService
  ) { }

  ngOnInit(): void {
    this._rx = this.jobService.getOpenJobs().subscribe(data => {
      this.jobs = data;
    });
  }

  public showMore(job: Job): void {
    this.showMoreCard = true;
    this.detailedJob = job;
  }

  public hideDetailed(): void {
    this.showMoreCard = false;
  }

  ngOnDestroy(): void {
    this._rx.unsubscribe();
  }

}
