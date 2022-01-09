import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rkstodo';
  c = 1;
  setC() {
    this.c = 2
    return true
  }
}
