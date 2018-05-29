import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { DraftingScheduleComponent } from './drafting-schedule.component';
const routes = [
  {
    path: 'draftingschedule',
    component: DraftingScheduleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    DraftingScheduleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DraftingScheduleComponent
  ]
})
export class DraftingScheduleModule { }
