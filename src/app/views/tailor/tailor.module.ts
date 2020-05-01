import { NgModule } from '@angular/core';
import { TailorComponent } from './tailor.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    TailorComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class TailorModule { }
