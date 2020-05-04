import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tailor',
  templateUrl: './tailor.component.html',
  styleUrls: ['./tailor.component.scss']
})
export class TailorComponent implements OnInit {
  public filterFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterFormGroup = this.formBuilder.group({
      jobTitle: '',
      location: '',
    });
  }

}
