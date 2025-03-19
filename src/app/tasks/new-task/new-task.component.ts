import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  title = '';
  summary = '';
  date = '';

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    console.log('Task submitted', this.title, this.summary, this.date);
  }
}
