import { Component, Input, OnInit } from '@angular/core';
import { BackendDerivatives } from 'src/derivatives';
import { CompanyselectionComponent } from '../companyselection/companyselection.component';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  payoffvalue :boolean = false;
 // payOffResult: BackendDerivatives[] = []; //declaring the payoff chart array

  constructor(private company:CompanyselectionComponent) { }

  @Input() pd : BackendDerivatives;

  NetLoss : string = '';
  NetProfit : string = '';
  margin :number = 0;

  ngOnInit(): void {
     this.NetLoss= this.company.payOffResult.tradeLoss ;
     this.NetProfit = this.company.payOffResult.tradeProfit;
     this.margin = this.company.payOffResult.tradeMargin;

     console.log(this.pd.tradeLoss)
  }

  payoffchartclicked(){
    this.payoffvalue=true;
    
  }
}
