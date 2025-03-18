import { Component } from '@angular/core';
import { DUMMY_USERS } from './userdata';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[0];
  get imagePath() {
    return `assets/${this.selectedUser.avatar}`;
  }
  onUserSelected() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
