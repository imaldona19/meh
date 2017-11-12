import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {

  fibonacci: number[] = [0];
  sequenceSize: number = 5;

  /**
   * Calculates fibonacci sequence
   * @param sequence number of items to be calculated
   */
  calculate(sequence:number): number[] {
    let result:number[]=[1,1];

    // number of items in result is less than sequence
    while(result.length<sequence){
      // take the last two items from the result array, add them, insert/push to the array
      let L1 = result.length -1;
      let L2 = result.length -2;

      let sum = result[L1] + result[L2];

      result.push(sum);
    }

    return result;
  }

  test() {
    this.calculate(5);
    this.sum(5, 10);
  }

  /**
   * Adds two numbers
   * @param a the first number
   * @param b the second number
   */
  sum(a: number, b: number) {
    return a+b;
  }
}