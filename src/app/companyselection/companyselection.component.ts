import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { derivatives, futuresderivatives, optionsderivatives } from 'src/derivatives';
@Component({
  selector: 'app-companyselection',
  templateUrl: './companyselection.component.html',
  styleUrls: ['./companyselection.component.css']
})
export class CompanyselectionComponent implements OnInit {

  
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
  }

  displayBasic: boolean;
  showBasicDialog() {
    this.displayBasic = true;
}

FuturesData:futuresderivatives={
  companyName:'',
  futuresCat:'',
  underlyingAsset:'',
  lotQuantity:0,
  futuresPrice:0

};

OptionsData:optionsderivatives={
  companyName:'',
  optionsCat:'', //long short
  optionsType:'', //call put
  underlyingAsset:'',
  lotQuantity:0,
  strikePrice:0,
  premium:0
};

AmazonClicked(){
   this.FuturesData.companyName = "Amazon"
   this.OptionsData.companyName = "Amazon"
  // console.log(this.FormData.companyName);
}
GoogleClicked(){
  this.FuturesData.companyName = "Google"
  this.OptionsData.companyName = "Google"
//  console.log(this.FormData.companyName);
}
WalmartClicked(){
  this.FuturesData.companyName = "Walmart"
  this.OptionsData.companyName = "Walmart"
}

onAssetChange(event){
  this.FuturesData.underlyingAsset=event.target.value
  this.OptionsData.underlyingAsset=event.target.value
}

onFuturesMarketChange(event){
  this.FuturesData.futuresCat=event.target.value
  // console.log(this.FormData.futuresCat)
}

onOptionMarketChange(event){
  this.OptionsData.optionsCat=event.target.value
}


onOptionTypeChange(event){
  this.OptionsData.optionsType = event.target.value

}

strikeprice(event){
  this.OptionsData.strikePrice = event.target.value
  
}
futureslist : futuresderivatives[] = [];

createFuturesList(){
  console.log(this.FuturesData.lotQuantity)
  console.log(this.futureslist);
  this.futureslist.push(this.FuturesData);
  console.log(this.futureslist);
}
}
