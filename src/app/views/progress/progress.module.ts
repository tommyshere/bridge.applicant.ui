import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProgressCardComponent } from './progress-card/progress-card.component';



@NgModule({
  declarations: [
    ProgressComponent,
    ProgressCardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProgressModule { }
