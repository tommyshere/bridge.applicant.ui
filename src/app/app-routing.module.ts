import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ApplyComponent } from './views/apply/apply.component';
import { ProgressComponent } from './views/progress/progress.component';
import { TailorComponent } from './views/tailor/tailor.component';
import { ProfileInputComponent } from './views/profile-input/profile-input.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'tailor', component: TailorComponent },
  { path: 'profile', component: ProfileInputComponent }
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
