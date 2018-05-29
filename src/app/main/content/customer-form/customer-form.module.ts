import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { CustomerFormComponent } from './customer-form.component';
const routes = [
  {
    path: 'customerforms',
    component: CustomerFormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    CustomerFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CustomerFormComponent
  ]
})
export class CustomerFormModule { }
