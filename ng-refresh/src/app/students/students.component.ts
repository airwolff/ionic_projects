import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from './students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit, OnDestroy {
studentsList: string[];
isFetching = false;
private studentListSubs: Subscription;
// private studentService: StudentsService;

constructor(private studService: StudentsService) {
  // this.studentsList = studService.students;
  // this.studentService = studService;
}

ngOnInit() {
  this.studentListSubs = this.studService.studentsChanged.subscribe(students => {
    this.studentsList = students;
    this.isFetching = false;
  });
  this.isFetching = true;
  this.studService.fetchStudent();
}

onRemoveStudent(studentName: string ) {
  this.studService.removeStudent(studentName);
}

// prevents memory leaks
ngOnDestroy() {
  this.studentListSubs.unsubscribe();
}

}

