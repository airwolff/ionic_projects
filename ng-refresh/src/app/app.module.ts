import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';

// add below decorator to export class AppModule to provide metadata so behind the scenes Angular will transpile code to execute properly
@NgModule({
  declarations: [
    AppComponent, CustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // root defined
  bootstrap: [AppComponent]
})
export class AppModule { }
