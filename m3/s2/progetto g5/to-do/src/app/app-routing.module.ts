import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/todo-list/todo-list.component';
import { CompletedTodoListComponent } from './component/completed-todo-list/completed-todo-list.component';
import { IncompleteTodoListComponent } from './component/incomplete-todo-list/incomplete-todo-list.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: "Home"
  },
  {
    path:'complete',
    component: CompletedTodoListComponent
  },
  {
    path:'Incomplete',
    component: IncompleteTodoListComponent
  },
  {
    path:'user',
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
