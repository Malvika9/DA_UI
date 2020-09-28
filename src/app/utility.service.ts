import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Credentials} from 'src/loginPayload'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private myHttp:HttpClient) { }
  
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
// http://localhost:8080/trades/login
}
