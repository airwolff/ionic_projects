import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentInputComponent } from './students/student-input.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'input', component: StudentInputComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
