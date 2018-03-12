import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsFirstComponent } from './components/clients-first/clients-first.component';
import { ClientsSecondComponent } from './components/clients-second/clients-second.component';
import { PriceComponent } from './components/price/price.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import {InformacionService} from "./informacion.service";
import {HttpModule} from "@angular/http";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    PortfolioComponent,
    AboutComponent,
    ClientsFirstComponent,
    ClientsSecondComponent,
    PriceComponent,
    NewsletterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
