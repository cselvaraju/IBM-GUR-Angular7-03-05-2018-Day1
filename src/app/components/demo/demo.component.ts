import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  firstName: string;
  lastName: string;
  actors = [
    {name: 'Amitabh Bachhan', city: 'Mumbai'},
    {name: 'Kamal Hasan', city: 'Chennai'},
    {name: 'Aishwarya Rai', city: 'Mumbai'},
    {name: 'Priyanka Chopra', city: 'Hollywood'},
    {name: 'Rajnikant', city: 'Chennai'}
  ];

  constructor() {
   }

  ngOnInit() {
    this.firstName = 'Amitabh';
    this.lastName = 'Bachhan';
  }

}
