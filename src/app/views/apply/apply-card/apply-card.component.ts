import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'app/class';
import { MatDialog } from '@angular/material/dialog';
import { ExpandJobViewDialogComponent } from 'app/shared/expand-job-view-dialog/expand-job-view-dialog.component';

@Component({
  selector: 'app-apply-card',
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.scss']
})
export class ApplyCardComponent implements OnInit {
  @Input() public job: Job;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openJobDesc() {
    this.dialog.open(ExpandJobViewDialogComponent, {
      width: '60%',
      data: {
        job: this.job
      }
    });
  }

}
