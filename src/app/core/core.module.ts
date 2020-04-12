import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'app/shared/shared.module';
import { UserProfileComponent } from './navbar/user-profile/user-profile.component';

@NgModule({
  declarations: [
    NavbarComponent,
    UserProfileComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
