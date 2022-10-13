import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  // styleUrls: ['./assigment2.component.css']
  styles:[`.online{
    color:white;
  }`]
})
export class Assigment2Component implements OnInit {
  output =false;
  date = new Date();
  count = 0;
  btnCLick:any=[];
  constructor() {

  }

  ngOnInit(): void {
  }
  displayDetails(){
    this.output = !this.output;
  // console.log(this.count++);
    this.btnCLick.push(this.date);
    // this.output = true;
  }
}
