import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // todosList: any;
  // demoData: any;
  // constructor(private dialoge: MatDialog, private todoService: TodoService) {
  //   // this.todosList = this.todoService.listOfTodos;
  //   // this.demoData = this.todoService.demo(this);
  //   // console.log(this.demoData);
  // }
  // handlePop() {
  //   this.dialoge.open(PopUpComponent);
  // }
  // ngOnInit(): void {
  //   this.todosList = this.todoService.listOfTodos;
  //   this.demoData = this.todoService.demo(this);
  //   console.log(this.demoData);
  // }
}
