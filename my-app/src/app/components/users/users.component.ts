import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../../../app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]=[];
  myControl: FormControl = new FormControl();
  loadingUsers:boolean=false;
  showExtended:boolean=false;
  enableAdd:boolean=true;
  isActive:boolean=true;
  // currentClasses={};
  // currentStyle={}
  constructor() {
    console.log('I am constructor')
   }

  ngOnInit(): void {
    console.log('I am ngOnInit')
    setTimeout(() => {
        this.users = [{
      firstName: 'John',
      lastName: 'Doe',
      age:30,
      address:{
        street: '50 Boston st',
        city:'Boston',
        state:'MA'
      },

      // image:'https://www.freepik.com/free-vector/light-bulb-gears-cogs_10603271.htm#query=innovation&position=4&from_view=keyword',
      // image:"assets/42609.jpg",
      isActive:true,
      // balance:100,
      registered:new Date('01/01/2018 08:30:00'),
      hide:true
    },
    {
      firstName: 'Steve',
      lastName: 'Job',
      age:60,
      address:{
        street: '60 Steven st',
        city:'Tampa',
        state:'FLorida'
      },
      // image:'https://www.freepik.com/free-vector/light-bulb-gears-cogs_10603271.htm#query=innovation&position=4&from_view=keyword'
      // image:"assets/buldjpg.jpg",
      isActive:false,
      // balance:200,
      registered:new Date('01/02/2018 08:32:00'),
       hide:true
    },
    {
      firstName: 'Mark',
      lastName: 'Bouncer',
      age:30,
      address:{
        street: '100 columbus st',
        city:'columbus',
        state:'ohio'
      },
      // image:"assets/42744.jpg",
      isActive:true,
      // balance:200,
      registered:new Date('01/02/2018 08:32:00'),
       hide:true
    },
  ];
  this.loadingUsers=true;
  // this.showExtended=true;
  // this.addUser({
  //     firstName: 'Neil',
  //     lastName: 'Armstrong',
  //     },);

    }, 2000);
    // this.setCurrentClassess();
    // this.setCurrentStyle();
  }

  addUser(user:User){
      this.users.push(user);
  }
  // setCurrentClassess(){
  //   this.currentClasses={
  //     'btn-success' : this.enableAdd,
  //     'big-text' : this.showExtended
  //   }
  // }
  // setCurrentStyle(){
  //   this.currentStyle={
  //     'padding-top': this.showExtended?'0':'40px',
  //     'font-size':this.showExtended?'': '40px'
  //   }
  // }

}
