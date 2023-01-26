import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { count, Observable } from 'rxjs';
import { PostService } from '../services/post.service';
// import { LearnDataTypes, NewApi } from '../typesDTO';
// import { FirstObject } from '../typesDTO';
@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']

})
export class RxjsLearningComponent implements OnInit {
    // mycheckObject:FirstObject[]=[]
    // testMyInterface: LearnDataTypes[]=[];
  // ofOperator =['one','two','three'];
  // agents!: Observable<string>;
  // agentNam:any=[];

  constructor(private postService:PostService) {


    }

  ngOnInit() {

    this.postService.getPosts().subscribe((one:any) =>{

      console.log('testMyInterface',one.entries)
    })
  }
}
