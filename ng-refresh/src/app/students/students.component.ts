import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})
export class StudentsComponent {
  // tells angular this property (studentsList) of this component (StudentsComponent) can be bound from outside. ie the <app-students> in whichever .component.html that has <app-students [studentsList]="persons"> inside of it
  @Input() studentsList: string[];
}

