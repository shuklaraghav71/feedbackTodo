import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.css']
})
export class PracticesComponent implements OnInit {
  oncontact: any=false;
  onabout: any=false;

  constructor() { }

  ngOnInit(): void {
  }

}
