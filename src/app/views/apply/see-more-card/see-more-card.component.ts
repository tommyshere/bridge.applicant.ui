import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'app/class';

@Component({
  selector: 'app-see-more-card',
  templateUrl: './see-more-card.component.html',
  styleUrls: ['./see-more-card.component.scss']
})
export class SeeMoreCardComponent implements OnInit {
  @Input() job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}
