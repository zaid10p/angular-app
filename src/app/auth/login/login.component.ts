import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent {
  private form = viewChild<NgForm>('form');
  private destryref = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const subs = this.form()?.valueChanges?.subscribe((value) => {
        console.log('Form value changed:', value);
      });

      this.destryref.onDestroy(() => {
        subs?.unsubscribe();
      });
    });
  }
  onSubmit(form: NgForm) {
    console.log(form.invalid, form.status);

    if (form.invalid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    console.log('submitted value', { email, password });
    //reset form
    form.reset();
  }
}
