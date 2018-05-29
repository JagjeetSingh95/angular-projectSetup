import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { PriceListsComponent } from './price-lists.component';
const routes = [
  {
    path: 'pricelists',
    component: PriceListsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    PriceListsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PriceListsComponent
  ]
})
export class PriceListsModule { }
