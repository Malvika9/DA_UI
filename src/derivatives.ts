export interface futuresderivatives{
    companyName:string;
    futuresCat:string;
    underlyingAsset:string;
    lotQuantity:number;
    futuresPrice:number;
   
}
export interface optionsderivatives{
    companyName:string;
    optionsCat:string; //long short
    optionsType:string; //call put
    underlyingAsset:string;
    lotQuantity:number;
    strikePrice:number;
    premium:number;
   
}
export interface derivatives{
   futuresTrade:futuresderivatives[];
   optionsTrade:optionsderivatives[];
}
// export interface Optionsderivatives{

// }