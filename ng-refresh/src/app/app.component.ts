import { Component } from '@angular/core';

@Component({
  // points to html tag at root document
  selector: 'app-root',
  // what to render when mounting component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: string[] = ['Holden', 'Tiffany', 'Avery'];

  // getting student name that was created
  onStudentCreated(name: string) {
    this.students.push(name);
  }
}
