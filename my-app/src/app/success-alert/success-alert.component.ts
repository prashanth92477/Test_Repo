import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  // selector:'app-success-alert',
  selector:'[app-success-alert]', // attirbute binding
  templateUrl:'./success-alert.component.html',
  // template:<app-warning-alert></app-warning-alert> // using the Inline TEmplate
  styleUrls:['./success-alert.component.css']
})
export class SuccessAlert{

}
