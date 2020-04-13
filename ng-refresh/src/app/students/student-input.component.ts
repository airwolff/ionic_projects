import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
// register in app-module
export class StudentInputComponent {
  @Output() studentCreate = new EventEmitter<string>();
  enteredStudentName: string = '';

  onCreateStudent(studentName: string) {
    console.log('created: ' + this.enteredStudentName);
    // thanks to output and emitter this is being emitted and can be hear from outside
    this.studentCreate.emit(this.enteredStudentName);
    this.enteredStudentName = '';
  }
}
