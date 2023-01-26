import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';
import { User } from '../../app/models/User';
@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css']
})

export class UserComponent{
user:User;
  constructor(){
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age:30,
      address:{
        street: '50 Boston st',
        city:'Boston',
        state:'MA',
      }
    }
  }
}

