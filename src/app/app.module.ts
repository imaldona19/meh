import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighOrLowComponent } from './high-or-low/high-or-low.component';

@NgModule({
  declarations: [
    AppComponent,
    HighOrLowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
