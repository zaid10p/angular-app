import { Injectable } from '@angular/core';
import { DummyTasks } from '../userdata';
import { TaskData } from '../../types';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = DummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: TaskData, userId: string) {
    this.tasks.unshift({
      ...taskData,
      id: Math.random().toString(),
      userId,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
