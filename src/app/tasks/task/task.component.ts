import { Component, inject, Input } from '@angular/core';
import { Task } from '../../../types';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe, ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TasksService);

  onCompleted() {
    this.taskService.removeTask(this.task.id);
  }
}
