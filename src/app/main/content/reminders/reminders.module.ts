import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { RemindersComponent } from './reminders.component';
const routes = [
  {
    path: 'reminders',
    component: RemindersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    RemindersComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RemindersComponent
  ]
})
export class RemindersModule { }
