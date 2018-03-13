import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {InformacionService} from "./informacion.service";
import {HttpModule} from "@angular/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AboutComponent} from "./components/about/about.component";
import {
  ClientsFirstComponent,
  ClientsSecondComponent,
  ContactComponent,
  HomeComponent,
  NavbarComponent,
  NewsletterComponent,
  PortfolioComponent,
  PriceComponent,
  ServiceComponent} from "./components/index.paginas";

import {AngularFireDatabase,AngularFireDatabaseModule} from "angularfire2/database";
import { FormsModule } from '@angular/forms';
var config = {
    apiKey: "AIzaSyALrjXcphw3y1olVUAuxG4m2DGFyiNfGdc",
    authDomain: "softlistig-cb3a2.firebaseapp.com",
    databaseURL: "https://softlistig-cb3a2.firebaseio.com",
    projectId: "softlistig-cb3a2",
    storageBucket: "softlistig-cb3a2.appspot.com",
    messagingSenderId: "428317011541"
  };

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
      ClientsFirstComponent,
      ClientsSecondComponent,
      ContactComponent,
      HomeComponent,
      NavbarComponent,
      NewsletterComponent,
      PortfolioComponent,
      PriceComponent,
      ServiceComponent
      ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    FormsModule,
  ],
  providers: [InformacionService,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
