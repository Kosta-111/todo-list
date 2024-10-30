import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { ITodoItem, TODOITEMS } from './models/todoItem';
import { TodoCreateFormComponent } from './todo-create-form/todo-create-form.component';
import { TodoFiltersFormComponent } from './todo-filters-form/todo-filters-form.component';
import { IFilter } from './models/filter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, TodoCreateFormComponent, TodoFiltersFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My To Do List';  
  todoItems: ITodoItem[] = TODOITEMS;
  filteredItems: ITodoItem[] = TODOITEMS;
  filter: IFilter;
  currentId: number;
  
  constructor() {
    this.currentId = this.todoItems.length > 0 
      ? Math.max(...this.todoItems.map(x => x.id)) + 1
      : 1;

    this.filter = {
      deadlineSort: '0',
      priorityFilter: '0',
      searchText: ''
    };
  }

  removeItem(id: number) {
    let index = this.todoItems.findIndex(x => x.id === id);
    if (index !== -1)
    {
      this.todoItems.splice(index, 1);
      this.filterItems();
    }
  }

  create(newItem: ITodoItem) {
    newItem.id = this.currentId++;
    if (newItem.deadline)
      newItem.deadline = new Date(Date.parse(newItem.deadline.toString()));
    this.todoItems.push(newItem);
    this.filterItems();
  }

  clearAll() {
    this.todoItems = [];
    this.filteredItems = [];
    this.currentId = 1;
  }

  updateFilter(filter: IFilter) {    
    this.filter = filter;
    this.filterItems();
  }

  filterItems() {
    switch (this.filter.deadlineSort) {
      case '1':
        this.filteredItems = this.todoItems.sort((a,b) => (a.deadline?.getTime() ?? 0) - (b.deadline?.getTime() ?? 0));
        break;
      case '2':
        this.filteredItems = this.todoItems.sort((a,b) => (b.deadline?.getTime() ?? 0) - (a.deadline?.getTime() ?? 0));
        break;
      default:
        this.filteredItems = this.todoItems.sort((a,b) => a.id - b.id);
        break;
    }
    switch (this.filter.priorityFilter) {
      case '1':
        this.filteredItems = this.filteredItems.filter(x => x.isImportant);
        break;
      case '2':
        this.filteredItems = this.filteredItems.filter(x => !x.isImportant);
        break;    
      default:
        break;
    }
    if(this.filter.searchText.length > 0)
      this.filteredItems = this.filteredItems.filter(x => x.name.toLowerCase().includes(this.filter.searchText.toLowerCase()));
  }
}
