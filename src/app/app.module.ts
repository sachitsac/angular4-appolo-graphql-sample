import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppoloDataService, provideClient } from './services/appolo-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot( provideClient )
  ],
  providers: [ AppoloDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
