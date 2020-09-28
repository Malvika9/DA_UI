import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Select a company',
        routerLink: 'trades'
      },
      {
        label: 'Analysis',
        routerLink: 'analysis'
      },
      {
        label: 'Payoff Chart'

      }
    ];
  }

}
