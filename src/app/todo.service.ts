// todo.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  private _todos = signal<Todo[]>([]);
  todos = this._todos.asReadonly();

  constructor(private http: HttpClient) {}

  loadTodos(url?: string) {
    this.http.get<Todo[]>(url || this.baseUrl).subscribe((data) => {
      this._todos.set(data.slice(0, 5));
    });
  }

  addTodo(todo: Todo, url?: string) {
    this.http.post<Todo>(url || this.baseUrl, todo).subscribe(() => {
      this._todos.update((prev) => [todo, ...prev]);
    });
  }

  clearTodos() {
    this._todos.set([]);
  }
}
