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
  date:any;
  constructor(public _is:InformacionService, public http:Http, private afDB:AngularFireDatabase){
    this.home_data();
    this.team_data();
    this.skills();
    this.general();
    this.prices_data();
    this.clientes_data();
    this.date= new Date().getFullYear();
}

  home_data(){
    this.http.get("https://softlistig-cb3a2.firebaseio.com/header.json").subscribe(data=>{
      this.header=data.json();
        this.header.splice(0,1);
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
  console.log(this.prices);
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
  subscribe_news(f: NgForm){
     console.log(f.value);
      let news:newsletter={};
      news.email=f.value.email;
let aux = news.email.indexOf("@");
    console.log("aux: ",aux);
    let key =news.email;
    key=news.email.substring(0,aux);
    console.log(key);
    this.afDB.object(`/newsletter/${key}`).update(news).then(()=>{
      console.log("Listo")
    }).catch(()=>{
      console.log("Hubo un error, intente nuevamente");
    });
}
send_comments(f: NgForm){
   console.log(f.value);
    let comment:comments={};
    comment.comentario=f.value.comment;
    comment.email=f.value.email;
    comment.nombre=f.value.name;
    comment.key=Date.now().valueOf();
    if(!comment.nombre && !comment.email){

    } else{
      console.log(comment);
      this.afDB.object(`/contactos/${comment.key}`).update(comment).then(()=>{
        console.log("Listo")
      }).catch((err)=>{
        console.log("Hubo un error, intente nuevamente",err);
      });
    }
    //news.email=f.value.email;

// let aux = news.email.indexOf("@");
//   console.log("aux: ",aux);
//   let key =news.email;
//   key=news.email.substring(0,aux);
//   console.log(key);
  // this.afDB.object(`/newsletter/${key}`).update(news).then(()=>{
  //   console.log("Listo")
  // }).catch(()=>{
  //   console.log("Hubo un error, intente nuevamente");
  // });
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
