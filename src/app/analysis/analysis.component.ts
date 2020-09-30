import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendDerivatives, payoffType } from 'src/derivatives';
import { CompanyselectionComponent } from '../companyselection/companyselection.component';

// declare function callpayoffchart(payOffCoordinates):any;

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  payoffvalue: boolean = false;
  // payOffResult: BackendDerivatives[] = []; //declaring the payoff chart array

  constructor(private route: ActivatedRoute, private router: Router) { }

  payOffResult: BackendDerivatives;

  NetLoss: string = '';
  NetProfit: string = '';
  margin: number = 0;
  bp : [] = []
  pc : payoffType;
  ngOnInit(): void {

    // this.payOffResult = this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // Defaults to 0 if no query param provided.
    //     this.payOffResult = +params['payOffResult'] || 0;
    //   });
    // this.payOffResult = this.route.snapshot.queryParamMap('payOffResult')
    this.NetLoss = history.state.tradeLoss;
    this.NetProfit = history.state.tradeProfit;
    this.margin = history.state.tradeMargin;
    this.bp = history.state.breakEvenPoints;
    console.log("breakeven-points")
    console.log(this.bp)
    this.pc = history.state.payOffCoordinates

    console.log(this.pc)
// this.pc.profitOrLoss = history.state.payOffCoordinates.profitOrLoss
// this.pc.spotPrice = history.state.payOffCoordinates.spotPrice
    // this.payOffResult = this.router.getCurrentNavigation().extras.queryParams.payOffResult;
    console.log("inside analysis")
    console.log(history.state.payOffCoordinates)
    // callpayoffchart(history.state.payOffCoordinates);
  }

  payoffchartclicked() {
    this.payoffvalue = true;

  }
}
