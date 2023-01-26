import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Users } from '../users';



@Component({
  selector: 'app-learn-forms',
  templateUrl: './learn-forms.component.html',
  styleUrls: ['./learn-forms.component.css']
})
export class LearnFormsComponent implements OnInit {

    // topics = ['Angular','React','Vue'];
    // userss = new Users('Tom','one@email.com',231-231-2314,'','morning',true);
    registrationForm = new FormGroup({
      userName: new FormControl('Enter Username'),
      password:new FormControl(''),
      confirmPassword: new FormControl(''),
  })
    loadApiData(){
    this.registrationForm.patchValue({
        userName: 'Bruce',
      password:'test',
      confirmPassword: 'test'

    });
  }
  constructor() { }


  ngOnInit(): void {


  }

}

 // address:{
      //   city: 'Frisco',
      //   state: 'Texas',
      //   postal: '336178'
      // }
