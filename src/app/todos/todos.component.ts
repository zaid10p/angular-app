import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodoComponent implements OnInit {
  private store = inject(TodoService);

  todos = this.store.todos;

  ngOnInit() {
    this.store.loadTodos(); // ✅ trigger fetch here
  }

  addSampleTodo() {
    this.store.addTodo({
      id: Math.random().toString(30),
      title: 'Manually triggered task',
      completed: false,
    });
  }
}
