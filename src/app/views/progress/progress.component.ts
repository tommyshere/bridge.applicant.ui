import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProgressService } from './progress.service';
import { AppliedJob } from 'app/class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, OnDestroy {
  public appliedJobs: AppliedJob[];
  public dateCategory: string;
  private _rx: Subscription;

  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit(): void {
    this._rx = this.progressService.getAppliedJobs().subscribe(data => {
      this.appliedJobs = data;
    });
  }

  ngOnDestroy(): void {
    this._rx.unsubscribe();
  }

  public changeFilter(data) {
    console.log(data.value);
  }
}
