import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyselectionComponent } from './companyselection/companyselection.component';
import { DerivativeselectionComponent } from './derivativeselection/derivativeselection.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",component:LandingpageComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"trades",component:CompanyselectionComponent
  },
  {
    path:"derivative",component:DerivativeselectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
