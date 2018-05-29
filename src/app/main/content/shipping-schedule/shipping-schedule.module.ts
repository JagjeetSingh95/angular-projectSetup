import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { ShippingScheduleComponent } from './shipping-schedule.component';
const routes = [
  {
    path: 'shippingschedule',
    component: ShippingScheduleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    ShippingScheduleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ShippingScheduleComponent  ]
})
export class ShippingScheduleModule { }
