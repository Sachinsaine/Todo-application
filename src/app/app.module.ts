import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../components/todo/todo.component';

@NgModule({
  declarations: [AppComponent, PopUpComponent, TodoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
