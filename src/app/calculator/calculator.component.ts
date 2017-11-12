import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public from: number = 10;
  public result : number;

  constructor() { }

}

function getMiles(i) {
     return i*0.000621371192;
}
function getMeters(i) {
     return i*1609.344;
}

