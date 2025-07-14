import { Component, inject } from '@angular/core';
import { SafelinkDirective } from '../directive/safelink.directive';
import { AuthDirective } from '../directive/auth.directive';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css',
  imports: [SafelinkDirective, AuthDirective],
})
export class HeaderComponent {
  constructor() {}
  private authService = inject(AuthService);
  onGuestButtonClick() {
    this.authService.setType('admin');
  }
}
