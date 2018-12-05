import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<div><h1>Hello Angular Project - {{ title }}</h1></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  today = new Date();

  constructor() {
    this.title  = 'First Day Demo Project';
  }
}
