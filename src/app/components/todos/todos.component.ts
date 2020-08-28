
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faCoffee = faTrashAlt;
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todosone => {
      this.todos = todosone;
    })
  }

  changetodoStatus(todos: Todo) {
    this.todoService.changeStatus(todos);
  }

  deleteTodos(todos: Todo) {
    this.todoService.deleteTodo(todos);
  }

}
