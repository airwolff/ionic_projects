import { Component } from '@angular/core';

@Component({
  // points to html tag at root document
  selector: 'app-root',
  // what to render when mounting component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-refresh';
}
