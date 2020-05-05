import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { SharedModule } from 'app/shared/shared.module';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SeeMoreCardComponent } from './see-more-card/see-more-card.component';



@NgModule({
  declarations: [
    ApplyComponent,
    ApplyCardComponent,
    FilterPanelComponent,
    SeeMoreCardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ApplyModule { }
