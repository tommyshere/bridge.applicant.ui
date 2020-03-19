import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProgressModule { }
