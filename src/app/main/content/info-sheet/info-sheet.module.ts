import { NgModule } from '@angular/core';
import { AuthGuard } from '../guard/auth.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { InfoSheetComponent } from './info-sheet.component';
const routes = [
  {
    path: 'infosheet',
    component: InfoSheetComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    InfoSheetComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    InfoSheetComponent
  ]
})
export class InfoSheetModule { }
