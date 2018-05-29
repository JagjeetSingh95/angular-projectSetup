import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { LinwoodComponent } from './linwood.component';
import { AuthGuard } from '../guard/auth.guard';

const routes = [
    {
        path     : 'linwood',
        component: LinwoodComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        LinwoodComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        LinwoodComponent
    ]
})

export class LinwoodModule
{
}
