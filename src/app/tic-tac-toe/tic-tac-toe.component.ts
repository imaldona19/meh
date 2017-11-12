import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent  {

  // 0 - MEANS EMPTY
  // 1 - MEANS X
  // 2 - MEANS O
  table: number[][] = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  isTurnX: boolean = true;

  tick(row: number, col: number) {
    // if the field is already busy
    if (this.table[row][col] !== 0) {
      // the stop the function
      return;
    }

    if (this.isTurnX){
      this.table[row][col] = 1;
    }
    else {
      this.table[row][col] = 2;
    }

    this.isTurnX = !this.isTurnX;
    
    // check if wins
    this.checkIfWins(row, col);
  }

  newGame() {
    for (let row = 0; row <3; row++) {
      for (let col = 0; col <3; col++){
        this.table[row][col] = 0;
      }
    }
  }

  checkIfWins(row: number, col: number) {
    this.checkRow(row);
    this.checkCol(col);
    this.checkDiagonals();
  }

  checkRow(row: number) {
    if (this.table[row][0] === this.table[row][1] && this.table[row][1] === this.table[row][2]) {
      alert(this.table[row][0] + 'WINS');
    }
  }

  checkCol(col: number) {
    if (this.table[0][col]=== this.table[1][col] && this.table[1][col] === this.table[2][col]){
      alert(this.table[0][col]+ 'WINS');
    }

  }

  checkDiagonals() {
    if (this.table[0][0] === this.table[1][1] && this.table[1][1] === this.table[2][2]){
      alert(this.table[0][0]+ 'WINS');
    }
    if (this.table[0][2] === this.table[1][1] && this.table[1][1]=== this.table[2][0]){
      alert(this.table[0][2]+ 'WINS');
    }
  }

}
