import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { CompletedComponent } from './components/complete/complete.component';
import { HomepageComponent} from './components/home/home.component';
import { IncompleteComponent } from './components/incomplete/incomplete.component';
import { UsersComponent } from './components/user/user.component';

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  CompletedComponent,
  HomepageComponent,
  IncompleteComponent,
  UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
