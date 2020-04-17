import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StudentsService {
  studentsChanged = new Subject<string[]>();
  students: string[] = ['Holden', 'Tiffany', 'Avery'];

  constructor(private http: HttpClient) {}

  addStudent(name: string) {
    this.students.push(name);
    this.studentsChanged.next(this.students);
    console.log('students.service sends: ' + this.students);
  }

  removeStudent(name: string) {
    // filter is built in method that runs funcition on every element in array
    this.students = this.students.filter(student => {
      // will return all that are true
      return student !== name;
    });
    this.studentsChanged.next(this.students);
    console.log('this.students from removeStudent ' + this.students);
  }
}
