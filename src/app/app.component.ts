import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ITodoItem } from './models/todoItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My To Do List';  
  todoItems: ITodoItem[] = [
    {
      id: 1,
      name: "Hit the gym",
      deadline: new Date(2023, 3, 1),
      isDone: false,
      isImportant: false
    },
    {
      id: 2,
      name: "Pay bills",
      deadline: null,
      isDone: true,
      isImportant: true
    },
    {
      id: 3,
      name: "Meet John",
      deadline: null,
      isDone: false,
      isImportant: false
    },
    {
      id: 4,
      name: "Buy eggs",
      deadline: new Date(2023, 2, 29),
      isDone: false,
      isImportant: true
    },
    {
      id: 5,
      name: "Read a book",
      deadline: null,
      isDone: true,
      isImportant: false
    },
    {
      id: 6,
      name: "Organize office",
      deadline: null,
      isDone: false,
      isImportant: false
    },
    {
      id: 7,
      name: "Eat dinner",
      deadline: null,
      isDone: false,
      isImportant: false
    },
    {
      id: 8,
      name: "Buy apples",
      deadline: new Date(2023, 2, 5),
      isDone: false,
      isImportant: true
    },
    {
      id: 9,
      name: "Meet George",
      deadline: null,
      isDone: false,
      isImportant: true
    },
    {
      id: 10,
      name: "Feed the cat",
      deadline: null,
      isDone: false,
      isImportant: false
    },
    {
      id: 11,
      name: "Write a letter",
      deadline: null,
      isDone: true,
      isImportant: false
    },
    {
      id: 12,
      name: "Run 1 km",
      deadline: new Date(2022, 0, 15),
      isDone: false,
      isImportant: false
    }
  ]
}
