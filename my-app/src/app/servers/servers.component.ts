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

  constructor() { }

  ngOnInit(): void {
  }

}
