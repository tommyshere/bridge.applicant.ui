import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ApplyComponent } from './views/apply/apply.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apply', component: ApplyComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
