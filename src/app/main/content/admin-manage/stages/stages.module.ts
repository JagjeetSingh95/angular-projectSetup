import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { StagesComponent } from './stages.component';
import { StagesService } from './stages.service';
import { NewComponent } from './new/new.component';
import { AdminGuard } from '../../guard/admin-guard.service';
const routes = [
    {
        path: 'stages',
        component: StagesComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'stages/new',
        component: NewComponent,
        canActivate: [AdminGuard]
    }
];

@NgModule({
  declarations: [
        StagesComponent,
        NewComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        StagesComponent,
        NewComponent
    ],
   
    providers: [StagesService,AdminGuard]
})
export class StagesModule
{
}
