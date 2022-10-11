import { Component } from "@angular/core";

// To make typescript class angular useable.
@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
  // template:`<h1> Hello i am inline template server`
})
export class ServerComponent{ // typescript class
  ServerId:number=10;
  ServerStatus:string = 'offline';

  getServerStatus(){
    return this.ServerStatus
  }
}
