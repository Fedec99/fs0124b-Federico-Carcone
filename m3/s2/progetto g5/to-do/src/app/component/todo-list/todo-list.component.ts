import { TodoService } from './../../service/todo.service';
import { iFusion } from '../../model/fusion';
import { iUser } from '../../model/user';
import { UsersService } from '../../service/user.service';
import { Component } from '@angular/core';
import { iTodo } from './../../model/todo';

interface iSingleObject extends iTodo, iUser{
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class HomeComponent {

  todoArr: iTodo[] = [];

  usersArr: iUser[] = [];

  todoUserArr: iSingleObject[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UsersService) {}

  ngOnInit() {
    this.todoSvc.$todos.subscribe(todo => {
      this.todoArr = todo;
    });

    this.userSvc.$users.subscribe(users => {
      this.usersArr = users;
    });

    const oggettiNuovi = this.todoSvc.combinedObject(this.todoArr, this.usersArr);
    for (const key in oggettiNuovi) {
      let oggetto = oggettiNuovi[key];
      this.todoUserArr.push(oggetto);
    }
  }
}
