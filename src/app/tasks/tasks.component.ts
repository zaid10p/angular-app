import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../../types';
import { DummyTasks } from '../userdata';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  tasks = DummyTasks;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
  onAddTask() {
    this.isAddingTask = true;
  }
  onCancelDialog() {
    this.isAddingTask = false;
  }
}
