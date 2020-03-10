import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
