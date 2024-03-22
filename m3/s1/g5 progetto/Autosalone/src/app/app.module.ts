import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudiComponent } from './Components/auto/audi/audi.component';
import { FiatComponent } from './Components/auto/fiat/fiat.component';
import { FordComponent } from './Components/auto/ford/ford.component';
import { FooterComponent } from './Components/main/footer/footer.component';
import { HomeComponent } from './Components/main/home/home.component';
import { NavbarComponent } from './Components/main/navbar/navbar.component';

const routes: Route[] = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'fiat',
      component: FiatComponent
  },
  {
      path: 'ford',
      component: FordComponent
  },
  {
      path: 'audi',
      component: AudiComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AudiComponent,
    FiatComponent,
    FordComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
