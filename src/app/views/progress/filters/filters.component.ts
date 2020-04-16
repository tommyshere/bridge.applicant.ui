import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() public dateCategory = new EventEmitter<string>();
  public dateSort: string;

  constructor() { }

  ngOnInit(): void {
  }

  public changeDateCategory(data: string) {
    this.dateCategory.emit(data);
  }

}
