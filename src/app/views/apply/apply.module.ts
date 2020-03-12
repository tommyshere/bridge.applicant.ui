import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    ApplyComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ApplyModule { }
