import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  myLeftSock: Sock = {
    colour: 'Green',
    size: 41
  }

  mySocks: Sock[] = [
    {
      colour: 'Green',
      size: 41
    },
    {
      colour: 'Blue',
      size: 44
    },
    {
      colour: 'Pink',
      size: 28
    }
  ];


  matrixA: number[]   = [ 2, 6, 8, 5, 8, 5, 2];
  matrixB: number[]   = [ 4, 7, 2, 7, 2, 4 ,7];
  matrixC: number[]   = [ 2, 5, 1, 7, 4, 4 ,7];
  result: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  addMatrices() {
    let result = this.add(this.matrixA, this.matrixB);
    // let sumAB = this.add(this.matrixA, this.matrixB);
    // let result = this.add(sumAB, this.matrixC);

    console.log(result);
  }

  addMatricesAB() {
    if (this.matrixA.length !== this.matrixB.length) {
      alert('wrong number of items!!!');
      return;
    }

    let matrixASize = this.matrixA.length;
    for(let i=0; i<matrixASize; i++) {
      this.result[i] = this.matrixA[i] + this.matrixB[i];
    }

    console.log(this.result);
  }

  add(a: number[], b: number[]): number[] {
    let result: number[] = [];

    // 1. check if the number of items in a and b match
    // If not return error
    if (a.length !== b.length) {
      alert('WTF are you doing, OK BYEEEE');
      return;
    }

    // 2. Add each of the items one by one and add to the result matrix
    let size = a.length;
    for (let i=0; i<size; i++) {
      result[i] = a[i] + b[i];
    }

    // 3. Retrun the result
    return result;
  }

  substractMatrices() {
    let result = this.sub(this.matrixA, this.matrixB);

    console.log(result);
  }

  sub(a: number[], b: number[]): number[] {
    let result: number[] = [];

    // implement this

    return result;
  }

  substractMatricesAB() {
    if(this.matrixA.length !== this.matrixB.length){
      alert('wrong number of items!');
      return;
    }

    let size = this.matrixA.length;
    for(let i=0; i<size; i++){
      this.result[i] = this.matrixA[i] - this.matrixB[i];
    }
    console.log(this.result);
  }


  // if a[1, 5, 9]
  //    b[3, 4, 6]
  //  res[3, 5, 9]
  getTheHighestElementForField(a: number[], b: number[]): number[] {
    let result: number[] = [];

    // implement this

    return result;
  }



  showMeTheFirstSock() {
    console.log(this.mySocks[0]);
  }

  showMeTheLastSock() {
    let numberOfSocks = this.mySocks.length;

    console.log(this.mySocks[numberOfSocks-1]);
  }

  showAllSocks() {
    for(let i=0; i<this.mySocks.length; i++) {
      let sock = this.mySocks[i];
      console.log(sock);
    }
  }

   showAllSocks2() {
    for(let sock of this.mySocks) {
      console.log(sock);
    }
  }

}


class Sock {
  colour: string;
  size: number;
}