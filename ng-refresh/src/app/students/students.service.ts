import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class StudentsService {
  studentsChanged = new Subject<string[]>();
  students: string[];

  constructor(private http: HttpClient) {}

  fetchStudent() {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map(responseData => {
          return responseData.results.map(student => student.name);
        })
      )
      .subscribe(transformedData => {
        this.studentsChanged.next(transformedData);
      });
  }

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
