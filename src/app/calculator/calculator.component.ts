import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  public from: number = 10;
  public result : number;

  constructor() { }

public getMiles(i) {
     return i*0.000621371192;
}
public getMeters(i) {
     return i*1609.344;
}

}
