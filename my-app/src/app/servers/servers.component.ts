import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // Element style selector
  // selector:'[app-servers]', // attribute style selector
  // selector:'.app-servers',  // class style selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
// this one is create using angular cli
export class ServersComponent implements OnInit {
  serverCreated = false;
  allowNewServer=false;
  serverName='TestServer';
  serverCreationStatus = "No server was Created";
  Servers=['TestServer','TestServer 2']
  constructor() {


    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.Servers.push(this.serverName)
    this.serverCreationStatus = "Server was created: " + this.serverName;
  }
  onUpdateServerName(event:any){

    // console.log(event)
    return this.serverName=(<HTMLInputElement>event.target).value;
  }

}
