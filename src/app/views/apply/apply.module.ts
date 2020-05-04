import { NgModule } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { SharedModule } from 'app/shared/shared.module';
import { ApplyCardComponent } from './apply-card/apply-card.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';



@NgModule({
  declarations: [
    ApplyComponent,
    ApplyCardComponent,
    FilterPanelComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ApplyModule { }
