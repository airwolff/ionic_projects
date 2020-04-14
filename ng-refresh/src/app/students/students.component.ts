import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit {
studentsList: string[];
// private studentService: StudentsService;

constructor(private studService: StudentsService) {
  // this.studentsList = studService.students;
  // this.studentService = studService;
}

ngOnInit() {
  this.studentsList = this.studService.students;
}
}

