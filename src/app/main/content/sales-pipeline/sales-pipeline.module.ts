import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { SalesPipelineComponent } from './sales-pipeline.component';
const routes = [
  {
    path: 'salespipeline',
    component: SalesPipelineComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    SalesPipelineComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SalesPipelineComponent
  ]
})
export class SalesPipelineModule { }
