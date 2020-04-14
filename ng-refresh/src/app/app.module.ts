// browser module includes *ng for html
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentInputComponent } from './students/student-input.component';
import { AppRoutingModule } from './app-routing.module';

// add below decorator to export class AppModule to provide metadata so behind the scenes Angular will transpile code to execute properly
@NgModule({
  declarations: [
    AppComponent, StudentsComponent, StudentInputComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  // root defined
  bootstrap: [AppComponent]
})
export class AppModule { }
