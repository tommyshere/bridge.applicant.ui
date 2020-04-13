import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'app/class';

@Component({
  selector: 'app-apply-card',
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.scss']
})
export class ApplyCardComponent implements OnInit {
  @Input() public job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
