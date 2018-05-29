import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { CustomfieldComponent } from './customfield.component';
import { CustomfieldService } from './customfield.service';
import { NewComponent } from './new/new.component';
import { AdminGuard } from '../../guard/admin-guard.service';
const routes = [
    {
        path: 'customfield',
        component: CustomfieldComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'customfield/new',
        component: NewComponent,
        canActivate: [AdminGuard]
    }
];

@NgModule({
  declarations: [
        CustomfieldComponent,
        NewComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        CustomfieldComponent,
        NewComponent
    ],
   
    providers: [CustomfieldService,AdminGuard]
})
export class CustomfieldModule
{
}
