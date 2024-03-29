import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../model/itodo';
import { TodoService } from '../../todo.service';
import { iUser } from '../../model/iuser';
import { UsersService } from '../../user.service';

@Component({
  selector: 'app-incomplete',
  templateUrl: './incomplete.component.html',
  styleUrls: ['./incomplete.component.scss']
})
export class IncompleteComponent implements OnInit {

  incompleteTodos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoService: TodoService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadIncompleteTodos();
    this.loadUsers();
  }

  loadIncompleteTodos(): void {
    this.incompleteTodos = this.todoService.getIncompleteTodos();
  }

  loadUsers(): void {
    this.users = this.usersService.getAllUsers();
  }

  updateTodoStatus(todo: iTodo): void {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }

}
