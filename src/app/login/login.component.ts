import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Utility: UtilityService) { }
  loginButton: boolean = false;
  FormData:any={};
  // payload: any;

  loginButtonClicked() {
    this.loginButton = !this.loginButton;
  }
  ngOnInit(): void { }

  submitted() {
    this.Utility.login(this.FormData);
    console.log("submitted");
    
  }

  }
