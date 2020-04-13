import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ExpandJobViewDialogComponent } from './expand-job-view-dialog/expand-job-view-dialog.component';



@NgModule({
  declarations: [
    ExpandJobViewDialogComponent
  ],
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
