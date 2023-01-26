import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { LearnDataTypes } from '../typesDTO';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  geturl = "https://api.publicapis.org/entries"
  constructor(private httpClient:HttpClient) {

  }
   getPosts(){
    // return this.httpClient.get<LearnDataTypes>(this.geturl);
    return this.httpClient.get(this.geturl);
  }
}
