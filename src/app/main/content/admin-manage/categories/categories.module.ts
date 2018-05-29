import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';
import { NewComponent } from './new/new.component';
import { AdminGuard } from '../../guard/admin-guard.service';
const routes = [
    {
        path: 'categories',
        component: CategoriesComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'categories/new',
        component: NewComponent,
        canActivate: [AdminGuard]
    }
];

@NgModule({
  declarations: [
        CategoriesComponent,
        NewComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        CategoriesComponent,
        NewComponent
    ],
   
    providers: [CategoriesService,AdminGuard]
})
export class CategoriesModule
{
}
