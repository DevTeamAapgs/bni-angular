import { currentYear } from '@/app/common/constants'
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms'
import { RouterLink } from '@angular/router'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-forgot-password',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbProgressbarModule,
        RouterLink,
    ],
    templateUrl: './forgot-password.component.html',
    styles: ``
})
export class ForgotPasswordComponent {
  currentYear = currentYear
  forgotpwdForm!: UntypedFormGroup
  submitted: boolean = false
  submit: boolean = false
  fieldTextType!: boolean
  fillAmount: number = 0
  password: string = ''
  confirmPwd: string = ''
  email: string = ''

  emailSubmit() {
    this.submit = true
  }

  onSubmit() {
    this.submitted = true
  }

  validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirmpwd ? null : { notSame: true }
  }

  progressVariant: { variant: string; message: string } = {
    variant: 'danger',
    message: 'Write your password...',
  }

  updatePasswordStrength(): void {
    this.fillAmount = this.calculatePasswordStrength(this.password)
    this.progressVariant = this.getProgress(this.fillAmount)
  }

  calculatePasswordStrength(password: string): number {
    let score = 0

    const regexLower = new RegExp('(?=.*[a-z])')
    const regexUpper = new RegExp('(?=.*[A-Z])')
    const regexDigits = new RegExp('(?=.*[0-9])')
    const regexLength = new RegExp('(?=.{' + 8 + ',})')

    if (regexLower.test(password)) score += 25
    if (regexUpper.test(password)) score += 25
    if (regexDigits.test(password)) score += 25
    if (regexLength.test(password)) score += 25

    return score
  }

  changetype() {
    this.fieldTextType = !this.fieldTextType
  }

  getProgress(progress: number): { variant: string; message: string } {
    if (progress > 75) {
      return {
        variant: 'success',
        message: 'Yeah! that password rocks ;)',
      }
    } else if (progress > 50) {
      return {
        variant: 'info',
        message: 'That is better',
      }
    } else if (progress > 25) {
      return {
        variant: 'warning',
        message: 'That is a simple one',
      }
    } else {
      return {
        variant: 'danger',
        message: 'Easy peasy!',
      }
    }
  }
}
