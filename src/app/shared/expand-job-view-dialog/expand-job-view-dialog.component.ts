import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from 'app/class';

@Component({
  selector: 'app-expand-job-view-dialog',
  templateUrl: './expand-job-view-dialog.component.html',
  styleUrls: ['./expand-job-view-dialog.component.scss']
})
export class ExpandJobViewDialogComponent implements OnInit {
  job: Job;

  constructor(
    private dialogRef: MatDialogRef<ExpandJobViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.job = this.data.job;
  }

}
