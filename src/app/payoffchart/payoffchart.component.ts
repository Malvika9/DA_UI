import { Component, OnInit } from '@angular/core';
declare function callpayoffchart():any;
@Component({
  selector: 'app-payoffchart',
  templateUrl: './payoffchart.component.html',
  styleUrls: ['./payoffchart.component.css']
})
export class PayoffchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    callpayoffchart();
  }

}
