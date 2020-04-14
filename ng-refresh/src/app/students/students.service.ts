import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StudentsService {
  students: string[] = ['Holden', 'Tiffany', 'Avery'];

  addStudent(name: string) {
    this.students.push(name);
    console.log('students.service sends: ' + this.students);
  }
}
