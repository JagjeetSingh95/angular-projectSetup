import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { ProductionScheduleComponent } from './production-schedule.component';
const routes = [
  {
    path: 'productionschedule',
    component: ProductionScheduleComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    ProductionScheduleComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductionScheduleComponent
  ]
})
export class ProductionScheduleModule { }
