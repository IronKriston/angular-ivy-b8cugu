import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Sapanglab3Component } from '.sapanglab3/sapanglab3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Sapanglab3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
