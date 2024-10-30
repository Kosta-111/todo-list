import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ITodoItem, TODOITEMS } from './models/todoItem';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, TodoCreateFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My To Do List';  
  todoItems: ITodoItem[] = TODOITEMS;
  currentId: number = 1;
  
  constructor() {
    this.currentId = this.todoItems.length > 0 
      ? Math.max(...this.todoItems.map(x => x.id)) + 1
      : 1;
  }

  removeItem(id: number) {
    let index = this.todoItems.findIndex(x => x.id === id);
    if (index !== -1)
      this.todoItems.splice(index, 1);
  }

  create(newItem: ITodoItem) {    
    newItem.id = this.currentId++;
    this.todoItems.push(newItem);
  }

  clearAll() {
    this.todoItems = [];
    this.currentId = 1;
  }
}
