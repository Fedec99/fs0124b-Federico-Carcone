import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { CompletedTodoListComponent } from './component/completed-todo-list/completed-todo-list.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'completed', component: CompletedTodoListComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
