import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';
import { AppliedJob } from 'app/class';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  public appliedJobs: AppliedJob[];

  constructor(
    private progressService: ProgressService
  ) { }

  ngOnInit(): void {
    this.progressService.getAppliedJobs().subscribe(data => {
      this.appliedJobs = data;
    });
  }
}
