import { NgModule } from '@angular/core';
import { CustomfieldModule } from './customfield/customfield.module';
import { StagesModule } from './stages/stages.module';
import { CategoriesModule } from './categories/categories.module';
import { UserModule } from './users/user.module';
@NgModule({
  imports: [
    CustomfieldModule,
    StagesModule,
    CategoriesModule,
    UserModule
  ]
})
export class AdminmanageModule {
}
