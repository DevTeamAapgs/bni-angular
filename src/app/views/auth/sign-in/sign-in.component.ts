import { currentYear } from '@/app/common/constants'
import { login } from '@/app/store/authentication/authentication.actions'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import { Store } from '@ngrx/store'

@Component({
    selector: 'app-sign-in',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './sign-in.component.html',
    styles: ``
})
export class SignInComponent {
  currentYear = currentYear
  signinForm!: UntypedFormGroup
  submitted: boolean = false
  passwordType: boolean = true

  public fb = inject(UntypedFormBuilder)
  store = inject(Store)

  constructor() {
    this.signinForm = this.fb.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    })
  }
  get form() {
    return this.signinForm.controls
  }

  onLogin() {
    this.submitted = true
    if (this.signinForm.valid) {
      const email = this.form['email'].value
      const password = this.form['password'].value
      this.store.dispatch(login({ email: email, password: password }))
    }
  }

  changeType() {
    this.passwordType = !this.passwordType
  }
}
