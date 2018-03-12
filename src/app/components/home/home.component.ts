import { Component } from '@angular/core';
import {InformacionService} from "../../informacion.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
slides:any[]=[]
  constructor(public _is:InformacionService) {
    this.slides=this._is.header;
    console.log(this.slides);
  }



}
