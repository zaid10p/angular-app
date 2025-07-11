import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TaskData, User } from '../../types';
import { DummyTasks } from '../userdata';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { UserstatusComponent } from "../userstatus/userstatus.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent, UserstatusComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  tasks = DummyTasks;

  constructor(private readonly tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }
  onAddClick() {
    this.isAddingTask = true;
  }
  onCloseDialog() {
    this.isAddingTask = false;
  }
}
