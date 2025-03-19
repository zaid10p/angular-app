import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/${this.user.avatar}`;
  }
  onUserSelected() {
    this.select.emit(this.user);
  }
}
