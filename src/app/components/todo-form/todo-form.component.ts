import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { v4 as uuid4 } from "uuid";
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAdd() {
    const newTodo: Todo = {
      id: uuid4(),
      title: this.todoTitle,
      isComplete: false,
      date: new Date()
    }
    this.todoService.addTodos(newTodo);
    this.todoTitle = '';
  }

}
