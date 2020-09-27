import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyselectionComponent } from './companyselection/companyselection.component';
import { DerivativeselectionComponent } from './derivativeselection/derivativeselection.component';
// import { HomePageComponent } from './home-page/home-page.component';
// import { DialogModule } from 'primeng/dialog';
// import { ButtonModule } from '../../node_modules/primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    MenuComponent,
    CompanyselectionComponent,
    DerivativeselectionComponent,
    // HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // DialogModule,
    // ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
