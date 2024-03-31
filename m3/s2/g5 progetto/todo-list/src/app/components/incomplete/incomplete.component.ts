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
    this.loadIncomplete();
    this.loadUsers();
  }

  loadIncomplete(): void {
    this.incompleteTodos = this.todoService.getIncomplete();
  }

  loadUsers(): void {
    this.users = this.usersService.getAllUsers();
  }

  updateTodo(todo: iTodo): void {
    this.todoService.updateTodo(todo.id, todo.completed);
  }

}
