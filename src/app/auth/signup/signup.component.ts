import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs';

const mustcontianNumber = (control: AbstractControl) => {
  const hasNumber = /\d/.test(control.value || '');
  return hasNumber ? null : { mustContainNumber: true };
};
export const passwordsMatchValidator = (form: AbstractControl) => {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return { passwordsMismatch: true };
  }

  return null;
};

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule],
})
export class SignupComponent implements OnInit {
  form = new FormGroup(
    {
      email: new FormControl('', {
        validators: [Validators.email, Validators.required],
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          mustcontianNumber,
        ],
      }),
      confirmPassword: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(6),
          mustcontianNumber,
        ],
      }),
    },
    {
      validators: passwordsMatchValidator, // 👈 Attach group-level validator here
    }
  );
  destroy = inject(DestroyRef);

  ngOnInit() {
    const data = window.localStorage.getItem('formData');
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData.email) {
        this.form.controls.email.setValue(parsedData.email);
      }
    }
    const sub = this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        window.localStorage.setItem(
          'formData',
          JSON.stringify({ email: value.email })
        );
      });

    this.destroy.onDestroy(() => {
      sub.unsubscribe();
    });
  }
  getEmailInValid() {
    return this.form.controls.email.invalid && this.form.controls.email.touched;
  }
  getPasswordInValid() {
    return (
      this.form.controls.password.invalid && this.form.controls.password.touched
    );
  }
  getPasswordsMatch() {
    return (
      this.form.controls.confirmPassword.touched &&
      !!this.form.errors?.['passwordsMismatch']
    );
  }

  onSubmit() {
    console.log('FORM ', this.form.status);
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    console.log('Form submitted successfully:', this.form.value);
    // Here you would typically handle the form submission,
  }
}
