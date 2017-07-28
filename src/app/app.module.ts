import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppoloDataService, provideClient } from './services/appolo-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ApolloModule.forRoot( provideClient )
  ],
  providers: [ AppoloDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
