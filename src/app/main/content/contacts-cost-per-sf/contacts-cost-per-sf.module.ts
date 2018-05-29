import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { ContactsCostPerSfComponent } from './contacts-cost-per-sf.component';
const routes = [
  {
    path: 'contacts_costpersf_activity',
    component: ContactsCostPerSfComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    ContactsCostPerSfComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ContactsCostPerSfComponent
  ]
})
export class ContactsCostPerSfModule { }
