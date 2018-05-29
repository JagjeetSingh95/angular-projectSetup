import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PotentialclientMainSidenavComponent } from './sidenavs/main/main.component';
import { PotentialclientComponent } from './potentialclient.component';
import { LeadService } from '../Services/lead.service';
import { PotentialclientListComponent } from './potentialclient-list/potentialclient-list.component';
import { PotentialclientSelectedBarComponent } from './selected-bar/selected-bar.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { LeadfieldsService } from '../Services/leadfields.service';
import { AuthGuard } from '../guard/auth.guard';
import { Lead } from './lead.model';
const routes: Routes = [
  {
    path: 'potentialclient',
    component: PotentialclientComponent,
    resolve: {
      contacts: LeadService
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'potentialclient/customerinfo',
    component: CustomerinfoComponent,
    resolve: {
      leadfields: LeadfieldsService,
      leads: LeadService
    },
    canActivate: [AuthGuard]

  },
  {
    path: 'potentialclient/customerinfo/:id',
    component: CustomerinfoComponent,
    resolve: {
      leadfields: LeadfieldsService,
      leads: LeadService
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'potentialclient/customerinfo/:id/:handle',
    component: CustomerinfoComponent,
    resolve: {
      leads: LeadService
    },
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PotentialclientComponent,
    PotentialclientListComponent,
    PotentialclientSelectedBarComponent,
    PotentialclientMainSidenavComponent,
    CustomerinfoComponent
  ],
  providers: [
    LeadfieldsService, LeadService
  ]
})
export class PotentialclientModule {
}
