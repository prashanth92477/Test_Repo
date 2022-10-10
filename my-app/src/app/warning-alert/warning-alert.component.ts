import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: '[app-warning-alert]',
  // templateUrl: './warning-alert.component.html',
  template: `<p>warning-alert works!!!</p>`, // Here i am using the inline template and inline style
  // styleUrls: ['./warning-alert.component.css']
  styles:[`
    /* p{
      border-style:red;
      padding:5px;
      background-color:red;
      border-radius:5px;
    } */
    p{
      border-style: solid;
      border-color: red;
      background-color: red;
      padding: 5px 5px 5px 5px;
      border-radius: 5px;
}
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
