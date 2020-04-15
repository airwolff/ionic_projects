import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from './students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit, OnDestroy {
studentsList: string[];
private studentListSubs: Subscription;
// private studentService: StudentsService;

constructor(private studService: StudentsService) {
  // this.studentsList = studService.students;
  // this.studentService = studService;
}

ngOnInit() {
  this.studentsList = this.studService.students;
  this.studentListSubs = this.studService.studentsChanged.subscribe(students => {
    this.studentsList = students;
  });
}

onRemoveStudent(studentName: string ) {
  this.studService.removeStudent(studentName);
}

// prevents memory leaks
ngOnDestroy() {
  this.studentListSubs.unsubscribe();
}

}

