import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileInputComponent } from './profile-input.component';


@NgModule({
  declarations: [
    ProfileInputComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ProfileInputModule { }
