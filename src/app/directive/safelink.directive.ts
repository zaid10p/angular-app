import { Directive, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafelink]',
  standalone: true,
  host: {
    '(click)': 'onClick($event)',
  },
})
export class SafelinkDirective {
  query = input('myapp', { alias: 'appSafelink' });
  constructor() {}
  onClick(event: MouseEvent) {
    const confirm = window.confirm('Are you sure you want to navigate?');
    if (confirm) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + `?from=${this.query()}`;
      return;
    }
    event.preventDefault(); // Prevent default action if needed
  }
}
