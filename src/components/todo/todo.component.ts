import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoService, todo } from '../../app/todo.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todosList: todo[] = [];
  constructor(private dialoge: MatDialog, private todoService: TodoService) {}
  handlePop() {
    this.dialoge.open(PopUpComponent);
  }
  ngOnInit(): void {
    this.todosList = this.todoService.getTodos();
  }

  handleEdit(index: number) {
    this.todosList[index].isEditing = true;
  }
  updateText(id: number) {
    this.todoService.todos[id] = this.todosList[id];
    this.todosList[id].isEditing = false;
    this.todoService.update();
  }
  deleteTask(index: number) {
    this.todosList[index].isEditing = false;
    this.todoService.handleDeleteTask(index);
    this.dialoge.open(DeletePopupComponent);
  }

  // saveTodo() {
  //   localStorage.setItem('todos', JSON.stringify(this.todosList));
  // }

  // loadTodosFromLocalStorage() {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     this.todosList = JSON.parse(storedTodos);
  //   }
  // }
}
