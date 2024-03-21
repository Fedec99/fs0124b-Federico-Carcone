import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PostInattiviComponent } from './Components/post-inattivi/post-inattivi.component';
import { ActivePostsPageComponent } from './Components/post-attivi/post-attivi.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'post-attivi',
    component: ActivePostsPageComponent
  },
  {
    path:'post-inattivi',
    component: PostInattiviComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
