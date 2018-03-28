import { Component } from '@angular/core';
import {InformacionService} from "./informacion.service";
import {Http} from "@angular/http";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { Validators,FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';
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
  public prices:any=[];
  public email2:string;
  public clientes:any=[];
  public services:any=[];
  public portafolio:any=[];
  public thumbnail:any=[];
  date:any;
  constructor(public _is:InformacionService, public http:Http, private afDB:AngularFireDatabase){
    this.home_data();
    this.team_data();
    this.skills();
    this.general();
    this.prices_data();
    this.clientes_data();
    this.servicios();
    this.thumbnail_data();
    this.portafolio_data();
    this.date= new Date().getFullYear();
}

  home_data(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/header.json").subscribe(data=>{
      this.header=data.json();
        this.header.splice(0,1);
});
  }
  servicios(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/items_logo.json").subscribe(data=>{
      this.services=data.json();

});
  }
  clientes_data(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/clientes.json").subscribe(data=>{
      this.clientes=data.json();

});
  }

  team_data(){
this.http.get("https://softlistig-cb3a2.firebaseio.com/team.json").subscribe(data=>{
  this.team=data.json();
    this.team.splice(0,1);
});
  }
  prices_data(){
this.http.get("https://softlistig-cb3a2.firebaseio.com/price.json").subscribe(data=>{
  this.prices=data.json();

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

        this.generales.splice(0,1);
    });
  }
  subscribe_news(f: NgForm){

      let news:newsletter={};
      news.email=f.value.email;
let aux = news.email.indexOf("@");

    let key =news.email;
    key=news.email.substring(0,aux);

    this.afDB.object(`/newsletter/${key}`).update(news).then(()=>{

    }).catch(()=>{

    });
}
send_comments(f: NgForm){

    let comment:comments={};
    comment.comentario=f.value.comment;
    comment.email=f.value.email;
    comment.nombre=f.value.name;
    comment.key=Date.now().valueOf();
    if(!comment.nombre && !comment.email){

    } else{
  ;
      this.afDB.object(`/contactos/${comment.key}`).update(comment).then(()=>{
      }).catch((err)=>{
      });
    }

}
thumbnail_data(){
  this.http.get("https://softlistig-cb3a2.firebaseio.com/thumbnails_portafolio.json").subscribe(data=>{
    this.thumbnail=data.json();


      // this.generales.splice(0,1);
  });
}
portafolio_data(){
  this.http.get("https://softlistig-cb3a2.firebaseio.com/portafolio_descriptions.json").subscribe(data=>{
    this.portafolio=data.json();
    console.log(this.portafolio.desc3.Nombre);
});
}

}
interface newsletter {
  email?:string;
}

interface comments {
  nombre?:string;
  comentario?:string;
  email?:string;
  key?:number;
}
