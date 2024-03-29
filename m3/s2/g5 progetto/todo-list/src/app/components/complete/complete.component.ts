import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../user.service';
import { iUser } from '../../model/iuser';
import { TodoService } from '../../todo.service';
import { iTodo } from '../../model/itodo';

@Component({
  selector: 'app-completed',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})

export class CompletedComponent implements OnInit {
  completedTodos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoService: TodoService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.completedTodos = this.todoService.getCompletedTodos();
    this.users = this.usersService.getAllUsers();
  }

  updateTodoStatus(todo: iTodo): void {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }
}
