import { Component, OnInit } from '@angular/core';
import * as ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent implements OnInit {
  progressBar;

  constructor() { }

  ngOnInit() {
    this.drawBar();
  }

  drawBar() {
    this.progressBar = new ProgressBar.Line('.progress-container', {
      strokeWidth: 4,
      easing: 'easeInOut',
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
    }).animate(0.3);
  }

}
