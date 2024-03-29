import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/home/home.component';
import { CompletedComponent } from './components/complete/complete.component';
import { IncompleteComponent } from './components/incomplete/incomplete.component';
import { UsersComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'completed',
    component:CompletedComponent
  },
  {
    path:'incomplete',
    component:IncompleteComponent
  },
  {
    path:'users',
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
