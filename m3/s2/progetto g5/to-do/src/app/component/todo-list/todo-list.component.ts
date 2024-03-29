import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { UserService } from '../../service/user.service';
import { iTodo } from '../../model/todo';
import { iUser } from '../../model/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: iTodo[] = [];
  users: iUser[] = [];
  authorFilter: string = '';
  filteredTodos!: iTodo[];
getUser: any;

  constructor(private todoService: TodoService, private userService: UserService) { }

  ngOnInit(): void {
    this.loadTodos();
    this.loadUsers();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.applyFilter();
    });
  }


  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  applyFilter(): void {
    this.filteredTodos = this.todos.filter(todo => {
      const user: iUser | undefined = this.users.find(user => user.id === todo.userId);
      if (user && 'name' in user) {
        return (user as iUser).firstName.toLowerCase().includes(this.authorFilter.toLowerCase());
      }
      return false;
    });
  }


  updateTodoStatus(todo: iTodo): void {
    this.todoService.updateTodoStatus(todo.id, todo.completed).subscribe(updatedTodo => {
      const index = this.todos.findIndex(t => t.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    });
  }
  }


