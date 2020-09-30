import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { derivatives } from 'src/derivatives';
import { Credentials } from 'src/loginPayload'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private myHttp: HttpClient, private router:Router) { }

  isLoggedIn: boolean = false;

  login(credentials: Credentials) {
    this.myHttp
      .post('https://mycrudops.herokuapp.com/users', credentials)
      .subscribe(data => {
        console.log(data);
        console.log('logged in  successfully');
      }, err => {
        //in the failuer scenario
        console.log(err);
      });
  }
//   login(credentials: Credentials) {
//     let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*')
//     .set('Content-type','application/json');
//     return this.myHttp
//       .post('http://localhost:8080/trades/login', JSON.stringify(credentials),{headers:httpHeaders})
//       .subscribe(data => {
//         if(data==true){
//           window.alert('Logged in Successfully');  
//           this.router.navigateByUrl('');
//         } else{
//           window.alert('Username And Password Incorrect');
// //          this.router.navigateByUrl();
//         }
//      //   console.log('logged in successfully');
//       }, err => {
//         //in the failuer scenario
//         console.log(err);
//       });

//   }
  sendDerivative(derivative:derivatives){
    this.myHttp
      .post('https://mycrudops.herokuapp.com/users',derivative )
      .subscribe(data => {
        console.log(data);
        console.log('derivatives submitted successfully');
      }, err => {
        //in the failuer scenario
        console.log(err);
      });
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
// import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import {Credentials} from 'src/loginPayload'
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilityService {

//   constructor(private myHttp:HttpClient,private router:Router) {
//    }

//   login(credentials: Credentials) {
//     let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*')
//     .set('Content-type','application/json');
//     return this.myHttp
//       .post('http://localhost:8080/trades/login', JSON.stringify(credentials),{headers:httpHeaders})
//       .subscribe(data => {
//         if(data==true){
//           window.alert('Logged in Successfully');  
//           this.router.navigateByUrl('');
//         } else{
//           window.alert('Username And Password Incorrect');
// //          this.router.navigateByUrl();
//         }
//      //   console.log('logged in successfully');
//       }, err => {
//         //in the failuer scenario
//         console.log(err);
//       });

//   }

  // getLoginStatus()  {
  //   let httpHeaders=new HttpHeaders().set('allow-origin-access-control','*')
  //   .set('Content-type','application/json');
  //   return this.myHttp.get("http://localhost:8080/trades/login").subscribe(data => {
  //     console.log(data);
  //     console.log('logged in successfully');
  //   }, err => {
  //     //in the failuer scenario
  //     console.log(err);
  //   });

  // }

  // https://mycrudops.herokuapp.com/users
// http://localhost:8080/trades/login




