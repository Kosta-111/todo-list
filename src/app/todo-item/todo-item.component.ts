import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  todoItem?: ITodoItem;

  @Output()
  onDelete = new EventEmitter<number>();

  changeDone() {
    if (this.todoItem)
      this.todoItem.isDone = !this.todoItem.isDone;
  }

  remove() {
    this.onDelete.emit(this.todoItem?.id);
  }
}
