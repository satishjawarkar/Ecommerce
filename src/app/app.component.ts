import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  value = 'Wellcome to gautams';
  date = new Date()
// lazyloading component
  constructor(){

  }
}
