import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ExpandJobViewModalComponent } from './expand-job-view-modal/expand-job-view-modal.component';



@NgModule({
  declarations: [ExpandJobViewModalComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
