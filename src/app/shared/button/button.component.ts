import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  // options to apply on host element of the component
  host: {
    class: 'optional-class',
    '(click)': 'onClick()',
  },
})
export class ButtonComponent {
  //getting host element programmatically
  private hostElem = inject(ElementRef);
  onClick() {
    console.log('Button clicked!', this.hostElem.nativeElement);
  }
}
