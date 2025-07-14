import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../auth.service';

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<string>({ alias: 'appAuth' });

  private authserv = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authserv.activePermissions() === this.userType()) {
        this.viewRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewRef.clear();
      }
    });
  }
}
