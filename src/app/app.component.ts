import { Component } from '@angular/core';
import {InformacionService} from "./informacion.service";
import {Http} from "@angular/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  slides:any;
  public header:any=[]
  public team:any=[];
  public habilidades:any=[];
  public generales:any=[];
  constructor(public _is:InformacionService, public http:Http){
    this.home_data();
    this.team_data();
    this.skills();
    this.general();
  }

  home_data(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/header.json").subscribe(data=>{
      this.header=data.json();
        this.header.splice(0,1);
});
  }

  team_data(){
this.http.get("https://softlistig-cb3a2.firebaseio.com/team.json").subscribe(data=>{
  this.team=data.json();
    this.team.splice(0,1);
});
  }

  skills(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/habilidades.json").subscribe(data=>{
      this.habilidades=data.json();
        this.habilidades.splice(0,1);
    });
  }

  general(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/generales.json").subscribe(data=>{
      this.generales=data.json();
      console.log("Generales: ",this.generales);
        this.generales.splice(0,1);
    });

  }
}
