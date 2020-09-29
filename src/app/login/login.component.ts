import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public Utility: UtilityService , private modalService: NgbModal ) { }
  loginButton: boolean = false;
  FormData:any={};

  closeResult: string;
  // payload: any;
  value:any;


  loginButtonClicked() {
    this.loginButton = !this.loginButton;
  }
  ngOnInit(): void { }

  submitted() {
    console.log("submitted");
    console.log(this.FormData);
    this.Utility.login(this.FormData);
    console.log("submitted");
    // this.value = this.Utility.getLoginStatus().subscribe(data => {
    //   console.log(data);
    // }, err => {
    //   //in the failuer scenario
    //   console.log(err);
    // });
    // console.log(this.value);
    
  }
  }
