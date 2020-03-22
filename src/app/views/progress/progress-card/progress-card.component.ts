import { Component, Input, AfterViewInit } from '@angular/core';
import * as ProgressBar from 'progressbar.js';
import { AppliedJob } from 'app/class/applied-job';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements AfterViewInit {
  @Input() appliedJob: AppliedJob;
  @Input() index: number;
  progressBar: ProgressBar;

  constructor() { }

  ngAfterViewInit() {
    this.drawBar();
  }

  private drawBar() {
    this.progressBar = new ProgressBar.Line('.progress-container-' + this.index, {
      strokeWidth: 4,
      easing: 'easeInOut',
      color: this._setColor(this.appliedJob.progress),
      trailColor: '#eee',
      trailWidth: 1,
      text: {
        value: this._setText(this.appliedJob.progress),
        style: {
          color: 'black',
          margin: this._setMargins(this.appliedJob.progress)
        },
        aligntoBottom: true
      }
    }).animate(this.appliedJob.progress >= 0 ? this.appliedJob.progress : 1);
  }

  private _setMargins(progress: -1 | 0 | 0.25 | 0.50 | 0.75 | 1): string {
    if (progress > 0 && progress < 1) {
      return '0 40%';
    }
    return '0 45%';
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
        return 'Reviewed';
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


  private _setColor(progress: -1 | 0 | 0.25 | 0.50 | 0.75 | 1): string {
    switch (progress) {
      case -1: {
        return '#de3130';
      }
      case 0: {
        return '#eee';
      }
      case 0.25: {
        return '#1F9497';
      }
      case 0.50: {
        return '#C2DDB1';
      }
      case 0.75: {
        return '#017741';
      }
      case 1: {
        return '#5D6BB0';
      }
      default: {
        return '#eee';
      }
    }
  }

}
