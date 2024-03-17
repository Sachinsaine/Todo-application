import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../../app/todo.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrl: './delete-popup.component.css',
})
export class DeletePopupComponent {
  delelteTask: any;
  constructor(
    private dialoge: MatDialogRef<DeletePopupComponent>,
    private service: TodoService
  ) {
    this.delelteTask = this.service.removeTodo;
  }
  deleteTodo() {
    this.delelteTask = this.service.removeTodo;
    this.service.todos.splice(this.delelteTask, 1);
    this.dialoge.close();
    setTimeout(() => {
      alert('Task has been deleted!');
    }, 1000);
  }
}
