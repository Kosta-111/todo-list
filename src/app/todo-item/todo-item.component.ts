import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITodoItem } from '../models/todoItem';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todoItem: ITodoItem = {
    id: 0,
    name: "do something",
    deadline: null,
    isDone: false,
    isImportant: false
  };
}
