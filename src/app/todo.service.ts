import { Injectable } from '@angular/core';
export interface todo {
  task: string;
  isEditing: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: todo[] = [];
  constructor() {}
  addTodo(task: todo) {
    this.todos.push(task);
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }
  getTodos(): todo[] {
    this.todos = JSON.parse(sessionStorage.getItem('todos') || '[]');
    return this.todos;
  }
  removeTodo: any;
  handleDeleteTask(id: any) {
    this.removeTodo = id;
  }

  update() {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
