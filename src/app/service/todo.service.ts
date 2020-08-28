import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Angular',
        isComplete: true,
        date: new Date()
      },
      {
        id: '222',
        title: 'VUE',
        isComplete: true,
        date: new Date()
      },
      {
        id: '333',
        title: 'Reactjs',
        isComplete: true,
        date: new Date()
      }
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodos(todo: Todo) {
    this.todos.push(todo);
  }

  changeStatus(todo: Todo) {
    this.todos.map(singleStatus => {
      if (singleStatus.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    })
  }

  deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexofTodo, 1);
  }
}
