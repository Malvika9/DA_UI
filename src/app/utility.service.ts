import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendDerivatives, derivatives } from 'src/derivatives';
import { Credentials } from 'src/loginPayload'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private myHttp: HttpClient, private router:Router) { }

  isLoggedIn: boolean = false;

  login(credentials: Credentials) {
    let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*')
    .set('Content-type','application/json');
    return this.myHttp
      .post('http://localhost:8080/trades/login', JSON.stringify(credentials),{headers:httpHeaders})
      .subscribe(data => {
        if(data==true){
          this.router.navigateByUrl('/main');
          this.setIsLoggedIn();
        } if(data==false){
          window.alert('Username And Password Incorrect');
//          this.router.navigateByUrl();
        }
      }, err => {
        //in the failuer scenario
        console.log(err);
      });

  }
  pay : BackendDerivatives;
  var : any;
  sendDerivative(derivative:derivatives){
    this.myHttp
      .post('http://localhost:8080/trades/payoff',derivative )
      .subscribe(data => {
      // this.pay.breakEvenPoints =()data.breakEvenPoints;

        console.log(data);
        console.log('derivatives submitted successfully');
  
      }, err => {
        //in the failuer scenario
        console.log(err);

      });
  }
  //get dervivative result from backend
 getDerivatives(): BackendDerivatives
 {
   return this.pay;
 }

setIsLoggedIn() {
    this.isLoggedIn = true;
  }
  setIsLoggedOut() {
    this.isLoggedIn = false;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }
 
}




