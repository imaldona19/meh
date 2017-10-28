import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-or-low',
  templateUrl: './high-or-low.component.html',
  styleUrls: ['./high-or-low.component.css']
})
export class HighOrLowComponent  {
  
  currentNumber: number = 1;
  nextNumber: number = 2;
  score: number = 0;
  
  constructor() { }
  
  startNewGame(){
    this.currentNumber = this.generateNumber();
    this.nextNumber = this.generateNumber();
    this.getNextNumber();
    this.score = 0;
  }
  
  
  getNextNumber(){
    //1. move next number into the current number. 
    //2. get new number. New number can not be the same as the next number.
    this.currentNumber = this.nextNumber;
    
    while(this.currentNumber === this.nextNumber){
      this.nextNumber = this.generateNumber();
    }
  }

  
  generateNumber(){
    return Math.floor(Math.random()*10) +1;
  }
  
  guessLower(){
    
    if (this.nextNumber < this.currentNumber){
      this.score += 1;
    } else{
      this.score -= 1;
    };
    
    this.getNextNumber();
  }
  
  guessHigher(){

    if (this.nextNumber > this.currentNumber) {
      this.score += 1;
    } else{
      this.score -= 1;
    };
    
    this.getNextNumber();
  }
}
