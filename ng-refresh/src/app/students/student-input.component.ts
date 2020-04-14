import { Component } from '@angular/core';
import { StudentsService } from './students.service';


@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})

// register in app-module
export class StudentInputComponent {
  enteredStudentName = '';

  constructor(private studentsService: StudentsService) {}

  onCreateStudent(studentName: string) {
    console.log('student-input.component sends: ' + this.enteredStudentName);
    this.studentsService.addStudent(this.enteredStudentName)
    this.enteredStudentName = '';
  }
}
