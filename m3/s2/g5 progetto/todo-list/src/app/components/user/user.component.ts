import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../user.service';
import { iUser } from '../../model/iuser';
import { iTodo } from '../../model/itodo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {

  todos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoService: TodoService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadTodos();
    this.loadUsers();
  }

  loadTodos(): void {
    this.todos = this.todoService.getAllTodo();
  }

  loadUsers(): void {
    this.users = this.usersService.getAllUsers();
  }

  updateTodoStatus(todo: iTodo): void {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }

  getTodosForUser(userId: number): iTodo[] {
    return this.todos.filter(todo => todo.userId === userId);
  }

}
