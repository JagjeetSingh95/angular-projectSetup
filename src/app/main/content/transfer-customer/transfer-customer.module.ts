import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { TransferCustomerComponent } from './transfer-customer.component';
const routes = [
  {
    path: 'transfercustomer',
    component: TransferCustomerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    TransferCustomerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TransferCustomerComponent]
})
export class TransferCustomerModule { }
