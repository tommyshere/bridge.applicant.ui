import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
