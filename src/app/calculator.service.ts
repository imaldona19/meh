import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  public getMiles(i) {
    return i * 0.000621371192;
  }
  public getMeters(i) {
    return i * 1609.344;
  }

  public convertToCelsious(f: number): number {
    return (5 / 9) * (f - 32)
  }

  public convertToFahrenheit(c: number): number {
    return (c * (9 / 5)) + 32
  }

  public convertToPounds(kg: number): number {
    return kg * 2.2
  }
  public convertToKilograms(lb: number): number {
    return lb * 0.454

  }
}