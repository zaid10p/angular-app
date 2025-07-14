import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentType = signal('guest');

  constructor() {}

  setType(type: string) {
    this.currentType.set(type);
  }
  activePermissions() {
    return this.currentType();
  }
}
