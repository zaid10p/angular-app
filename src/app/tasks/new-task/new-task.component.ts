import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskData>();
  private taskService = inject(TasksService);

  title = '';
  summary = '';
  date = '';

  onClose() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.date,
      },
      this.userId
    );
    this.close.emit();
  }
}
