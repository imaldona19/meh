import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "app/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  public from: number = 10;
  public result: number;
  
  constructor(private calculator: CalculatorService) { }
  
  public convertoMiles() {
    this.result = this.calculator.getMiles(this.from);
  }
  
  public converttoMeters() {
    this.result = this.calculator.getMeters(this.from);
  }

  public convertToCelsius() {
    this.result = this.calculator.convertToCelsious(this.from);
  }
  
  public convertToFahrenheit() {
    this.result = this.calculator.convertToFahrenheit(this.from);
  }
  
  public convertToPounds() {
    this.result = this.calculator.convertToPounds(this.from);
  }
  public convertToKilograms() {
    this.result = this.calculator.convertToKilograms(this.from);
  }
}
