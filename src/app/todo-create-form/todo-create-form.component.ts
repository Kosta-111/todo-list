import { Component, EventEmitter, Output } from '@angular/core';
import { ITodoItem } from '../models/todoItem';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create-form.component.html',
  styleUrl: './todo-create-form.component.css'
})
export class TodoCreateFormComponent {
  @Output()
  onCreate = new EventEmitter<ITodoItem>();

  todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.todoForm = this.formBuilder.group({
      name: ['', Validators.required],
      deadline: [null],
      isDone: [false],
      isImportant: [false]
    });
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      alert("Invalid data!");
      return;
    }

    let todoItem = this.todoForm.value as ITodoItem;
    this.onCreate.emit(todoItem);
  }
}
