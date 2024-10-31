import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoItem } from '../models/todoItem';

const api = "https://jsonplaceholder.typicode.com/todos";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ITodoItem[]> {
    return this.httpClient.get<ITodoItem[]>(api);
  }

  getByUserId(userId: number): Observable<ITodoItem[]> {
    return this.httpClient.get<ITodoItem[]>(`${api}?userId=${userId}`);
  }
}
