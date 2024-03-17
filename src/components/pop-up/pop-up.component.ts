import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService, todo } from '../../app/todo.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  taskList: todo = {
    task: '',
    isEditing: false,
  };
  constructor(
    private dialoge: MatDialogRef<PopUpComponent>,
    private todoService: TodoService
  ) {}

  handleTask() {
    this.todoService.addTodo(this.taskList);
    this.dialoge.close();
    // setTimeout(() => {
    //   alert('Task Added Successfully');
    // }, 1000);
  }
}
