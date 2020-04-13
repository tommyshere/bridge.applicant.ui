import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { SharedModule } from 'app/shared/shared.module';
import { ApplyCardComponent } from './apply-card/apply-card.component';



@NgModule({
  declarations: [
    ApplyComponent,
    ApplyCardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ApplyModule { }
