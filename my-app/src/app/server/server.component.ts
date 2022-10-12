import { style } from "@angular/animations";
import { Component } from "@angular/core";

// To make typescript class angular useable.
@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  // template:`<h1> Hello i am inline template server`
  styles:[`.online{
    color:white;
  }`]
})
export class ServerComponent{ // typescript class
  ServerId:number=10;
  ServerStatus:string = 'offline';
  constructor(){
    this.ServerStatus = Math.random()> 0.5? 'online' : 'offline';
  }

  getServerStatus(){
    return this.ServerStatus === 'online' ? 'green': 'red';
  }
}
