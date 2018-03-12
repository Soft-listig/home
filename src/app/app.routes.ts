import { RouterModule, Routes } from '@angular/router';
import {HomeComponent,ServiceComponent,PriceComponent,
  PortfolioComponent,AboutComponent,ClientsFirstComponent,ClientsSecondComponent,
  NewsletterComponent,ContactComponent} from "./components/index.paginas";
const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'clients', component: ClientsSecondComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'precios', component: PriceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{ useHash: true });
