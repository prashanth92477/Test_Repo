import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment',
  templateUrl: './assigment.component.html',

})
export class AssigmentComponent implements OnInit {
  // username='';
  constructor() { }

  ngOnInit(): void {
  }
  reset(event:any){
    // this.username
    // this.username='';
  }
}
