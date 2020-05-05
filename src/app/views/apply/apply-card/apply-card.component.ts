import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from 'app/class';

@Component({
  selector: 'app-apply-card',
  templateUrl: './apply-card.component.html',
  styleUrls: ['./apply-card.component.scss']
})
export class ApplyCardComponent implements OnInit {
  @Input() public job: Job;
  @Output() public seeMore = new EventEmitter<Job>();
  @Output() public hideDetailed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public applyJob(): void {
    this.hideDetailed.emit();
  }

  public saveJob(): void {
    this.hideDetailed.emit();
  }

  public declineJob(): void {
    this.hideDetailed.emit();
  }

  public openJobDesc(): void {
    this.seeMore.emit(this.job);
  }

}
