import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [
    ProgressComponent,
    ProgressCardComponent,
    FiltersComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProgressModule { }
