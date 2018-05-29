import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { LinwoodModule } from './main/content/linwood/linwood.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoginModule } from '../app/main/content/login/login.module';
import { AuthGuard } from '../app/main/content/guard/auth.guard';//
import { UserService } from './main/content/login/_services/user.service';
import { AuthenticationService } from '../app/main/content/guard/authentication.service';
import { AdminmanageModule } from './main/content/admin-manage/admin-manage.module';
import { PotentialclientModule } from './main/content/potentialclient/potentialclient.module';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ContentModule } from './main/content/content.module';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/linwood'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    TranslateModule.forRoot(),
    FuseMainModule,
    LinwoodModule,
    LoginModule,
    InMemoryWebApiModule.forRoot(FuseFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),
    AdminmanageModule,
    PotentialclientModule,
    ContentModule
  ],
  providers: [
    FuseSplashScreenService,
    FuseConfigService,
    FuseNavigationService,
    AuthGuard,
    AuthenticationService,
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
