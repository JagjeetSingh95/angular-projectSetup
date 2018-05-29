import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { SalesFunnelComponent } from './sales-funnel.component';
const routes = [
  {
    path: 'salesfunnel',
    component: SalesFunnelComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    SalesFunnelComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SalesFunnelComponent
  ]
})
export class SalesFunnelModule { }
