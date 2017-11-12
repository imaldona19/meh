import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighOrLowComponent } from './high-or-low/high-or-low.component';
import { ArraysComponent } from './arrays/arrays.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { XoPipe } from './xo.pipe';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from "app/calculator.service";

@NgModule({
  declarations: [
    AppComponent,
    HighOrLowComponent,
    ArraysComponent,
    TicTacToeComponent,
    XoPipe,
    FibonacciComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
