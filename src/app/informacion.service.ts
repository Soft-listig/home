import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
@Injectable()
export class InformacionService {
header:any[]=[]
  constructor(public http:Http) {
    this.home_data();
  }

home_data(){
  let aux
  this.http.get("https://softlistig-cb3a2.firebaseio.com/header.json").subscribe(data=>{
    console.log(data.json());
    this.header=data.json();
      this.header.splice(0,1);
console.log(this.header);
  });


}
}
