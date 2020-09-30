import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { concat, Observable } from 'rxjs';
import { derivatives, futuresderivatives, optionsderivatives } from 'src/derivatives';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-companyselection',
  templateUrl: './companyselection.component.html',
  styleUrls: ['./companyselection.component.css']
})
export class CompanyselectionComponent implements OnInit {

  
  constructor(private primengConfig: PrimeNGConfig , private utility : UtilityService) { }

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
futureslist : Array<futuresderivatives> = [];
fd:futuresderivatives={
  companyName:'',
  futuresCat:'',
  underlyingAsset:'',
  lotQuantity:0,
  futuresPrice:0

};

optionsList: optionsderivatives[] = [];
od:optionsderivatives={
  companyName:'',
  optionsCat:'', //long short
  optionsType:'', //call put
  underlyingAsset:'',
  lotQuantity:0,
  strikePrice:0,
  premium:0
}

createFuturesList(){



  console.log(this.futureslist);
  this.fd.companyName = this.FuturesData.companyName;
  this.fd.lotQuantity = this.FuturesData.lotQuantity;
  this.fd.futuresCat = this.FuturesData.futuresCat;
  this.fd.futuresPrice = this.FuturesData.futuresPrice;
  this.fd.underlyingAsset = this.FuturesData.underlyingAsset;

  this.futureslist.push(this.fd);

   console.log(this.futureslist);


  //  this.fd.companyName = '';
  //  this.fd.lotQuantity = 0;
  //  this.fd.futuresCat = '';
  //  this.fd.futuresPrice = 0;
  //  this.fd.underlyingAsset = '';
 
  //  this.FuturesData.companyName = '';
  //  this.FuturesData.lotQuantity = 0;
  //  this.FuturesData.futuresCat = '';
  //  this.FuturesData.futuresPrice = 0;
  //  this.FuturesData.underlyingAsset = '';

  // this.fd.lotQuantity = 0;
  // this.fd.futuresCat = '';
  // this.fd.futuresPrice = 0;
  // this.fd.underlyingAsset = '';

  // console.log(this.futureslist);
}

createOptionsList(){

  this.od.companyName = this.OptionsData.companyName;
  this.od.lotQuantity = this.OptionsData.lotQuantity;
  this.od.optionsCat = this.OptionsData.optionsCat;
  this.od.strikePrice = this.OptionsData.strikePrice;
  this.od.underlyingAsset = this.OptionsData.underlyingAsset;
  this.od.optionsType = this.OptionsData.optionsType;
  this.od.premium = this.OptionsData.premium;

  this.optionsList.push(this.od);

}


totalList:derivatives={
  futuresTrade: [],
  optionsTrade: []
};

sendDerivatives(){
  this.displayBasic = false;
  this.totalList.futuresTrade.push(this.fd);
  this.totalList.optionsTrade.push(this.od);
  this.utility.sendDerivative(this.totalList);

  console.log(this.totalList);
}

}
