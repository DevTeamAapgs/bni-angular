import { FlatpickrDirective } from '@/app/directive/flatpickr.directive'
import { CommonModule } from '@angular/common'
import { Component, inject, Input } from '@angular/core'
import {
  AbstractControl,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'setting-account',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbProgressbarModule,
        CommonModule,
        FlatpickrDirective,
    ],
    templateUrl: './account.component.html',
    styles: ``
})
export class AccountComponent {
  fieldTextType!: boolean
  fieldTextType1!: boolean
  signupForm!: UntypedFormGroup
  submitted: boolean = false
  @Input() changePassword:boolean = false;
  public fb = inject(UntypedFormBuilder)

  constructor() {
    this.signupForm = this.fb.group(
      {
        currentPaasword: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmpwd: ['', [Validators.required]],
      },
      { validators: this.validateAreEqual }
    )
  }

  ngOnInit() {
    this.signupForm.get('password')?.valueChanges.subscribe((password) => {
      this.updatePasswordStrength(password)
    })
  }

  validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirmpwd ? null : { notSame: true }
  }

  changetype() {
    this.fieldTextType = !this.fieldTextType
  }

  get form() {
    return this.signupForm.controls
  }

  onSubmit() {
    this.submitted = true
  }

  fillAmount: number = 0
  progressVariant: { variant: string; message: string } = {
    variant: 'danger',
    message: 'Write your password...',
  }

  updatePasswordStrength(password: string): void {
    this.fillAmount = this.calculatePasswordStrength(password)
    this.progressVariant = this.getProgress(this.fillAmount)
  }

  calculatePasswordStrength(password: string): number {
    let score = 0

    const regexLower = new RegExp('(?=.*[a-z])')
    const regexUpper = new RegExp('(?=.*[A-Z])')
    const regexDigits = new RegExp('(?=.*[0-9])')
    const regexLength = new RegExp('(?=.{' + 8 + ',})')

    if (password.match(regexLower)) score += 25
    if (password.match(regexUpper)) score += 25
    if (password.match(regexDigits)) score += 25
    if (password.match(regexLength)) score += 25

    return score
  }

  getProgress(progress: number): { variant: string; message: string } {
    if (progress > 75)
      return {
        variant: 'success',
        message: 'Yeah! that password rocks ;)',
      }
    else if (progress > 50)
      return {
        variant: 'info',
        message: 'That is better',
      }
    else if (progress > 25)
      return {
        variant: 'warning',
        message: 'That is a simple one',
      }
    else
      return {
        variant: 'danger',
        message: 'Easy peasy!',
      }
  }
}
