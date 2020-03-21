import { Component, OnInit, Input } from '@angular/core';
import * as ProgressBar from 'progressbar.js';
import { AppliedJob } from 'app/class/applied-job';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements OnInit {
  @Input() appliedJob: AppliedJob;
  progressBar: ProgressBar;

  constructor() { }

  ngOnInit() {
    this.drawBar();
  }

  private drawBar() {
    this.progressBar = new ProgressBar.Line('.progress-container', {
      strokeWidth: 4,
      easing: 'easeInOut',
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      text: {
        value: this._setText(this.appliedJob.progress)
      }
    }).animate(
      // TODO: Can't have -1
      this.appliedJob.progress
      );
  }

  private _setText(progress: -1 | 0 | 0.25 | 0.50 | 0.75 | 1): string {
    switch (progress) {
      case -1: {
        return 'Denied';
      }
      case 0: {
        return 'Applied';
      }
      case 0.25: {
        return 'Reviwed';
      }
      case 0.50: {
        return 'Contacted';
      }
      case 0.75: {
        return 'Interviewing';
      }
      case 1: {
        return 'Hired';
      }
      default: {
        return 'N/A';
      }
    }
  }

  // TODO: Colors
  private _setColor(progress: -1 | 0 | 0.25 | 0.50 | 0.75 | 1): string {
    switch (progress) {
      case -1: {
        return 'Denied';
      }
      case 0: {
        return 'Applied';
      }
      case 0.25: {
        return 'Reviwed';
      }
      case 0.50: {
        return 'Contacted';
      }
      case 0.75: {
        return 'Interviewing';
      }
      case 1: {
        return 'Hired';
      }
      default: {
        return 'N/A';
      }
    }
  }

}
