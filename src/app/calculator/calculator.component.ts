import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "app/calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  public from: number = 10;
  public result : number;
  
  constructor(private calculator: CalculatorService) { }
  
  public getMiles(i) {
    return i*0.000621371192;
  }
  public getMeters(i) {
    return i*1609.344;
  }
  
  public convertoMiles() {
    this.result = this.getMiles(this.from);
  }
  
  public converttoMeters(){
    this.result = this.getMeters(this.from);
  }
  
  public convertToCelsius(){
    this.result = this.calculator.convertToCelsious(this.from);
  }
  
  public convertToFahrenheit(){
    this.result = this.calculator.convertToFahrenheit(this.from);
  }
  
  public convertToPounds(){
    this.result = this.calculator.convertToPounds(this.from);
  }
  public convertToKilograms(){
    this.result = this.calculator.convertToKilograms(this.from);
  }
  