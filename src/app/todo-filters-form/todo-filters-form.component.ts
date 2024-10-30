import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { IFilter } from '../models/filter';

@Component({
  selector: 'app-todo-filters-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-filters-form.component.html',
  styleUrl: './todo-filters-form.component.css'
})
export class TodoFiltersFormComponent {
  @Output()
  onUpdate = new EventEmitter<IFilter>();

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.filterForm = this.formBuilder.group({
      deadlineSort: ['0', Validators.required],
      priorityFilter: ['0', Validators.required],
      searchText: ['']
    });
  }

  onChange() {
    if (!this.filterForm.valid) {
      alert("Invalid filter data!");
      return;
    }
    let filter = this.filterForm.value as IFilter;
    this.onUpdate.emit(filter);
  }
}
