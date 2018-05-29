import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { OrderTrackingComponent } from './order-tracking.component';
const routes = [
  {
    path: 'ordertracking_reporting',
    component: OrderTrackingComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    OrderTrackingComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    OrderTrackingComponent
  ]
})
export class OrdertrackingModule { }
