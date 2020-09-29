import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis/analysis.component';
import { AppComponent } from './app.component';
import { CompanyselectionComponent } from './companyselection/companyselection.component';
import { DerivativeselectionComponent } from './derivativeselection/derivativeselection.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PayoffchartComponent } from './payoffchart/payoffchart.component';

const routes: Routes = [
  {
    path:"",component:LandingpageComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"payoffchart",component:PayoffchartComponent
  },
  {
    path:"derivative",component:DerivativeselectionComponent
  },
  {
    path:"analysis",component:AnalysisComponent
  },
  {
    path:"main",component:MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
