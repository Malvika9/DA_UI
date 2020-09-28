import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
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
}
