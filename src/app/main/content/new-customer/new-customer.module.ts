import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { NewCustomerComponent } from './new-customer.component';
const routes = [
  {
    path: 'newcustomer',
    component: NewCustomerComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    NewCustomerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NewCustomerComponent
  ]
})
export class NewCustomerModule { }
