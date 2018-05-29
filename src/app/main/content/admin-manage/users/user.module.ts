import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserMainSidenavComponent } from './sidenavs/main/main.component';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserSelectedBarComponent } from './user-bar/selected-bar.component';
import { UserFormDialogComponent } from './user-form/user-form.component';
import { AdminGuard } from '../../guard/admin-guard.service';
const routes: Routes = [
    {
        path     : 'users',
        component: UserComponent,
        canActivate: [AdminGuard],
        resolve  : {
            contacts: UserService
        }
    }
];

@NgModule({
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations   : [
        UserComponent,
        UserListComponent,
        UserSelectedBarComponent,
        UserMainSidenavComponent,
        UserFormDialogComponent
    ],
    providers      : [
        UserService,AdminGuard
    ],
    entryComponents: [UserFormDialogComponent]
})

export class UserModule
{
}
