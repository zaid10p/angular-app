import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/${this.user.avatar}`;
  }
  onUserSelected() {
    this.select.emit(this.user);
  }
}
