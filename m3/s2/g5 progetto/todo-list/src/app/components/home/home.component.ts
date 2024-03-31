import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../user.service';
import { iUser } from '../../model/iuser';
import { TodoService } from '../../todo.service';
import { iTodo } from '../../model/itodo';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomepageComponent implements OnInit {

  todos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoService: TodoService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
    this.users = this.usersService.getAllUsers();
  }

  updateTodo(todo: iTodo): void {
    this.todoService.updateTodo(todo.id, todo.completed);
  }
}
