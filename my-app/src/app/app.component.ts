import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  enableProperty = false
  constructor(){
    setTimeout(() => {
      this.enableProperty = true;
    }, 1000);

  }
  ngOnInit(): void {
      console.log(this.enableProperty);
  }

}
