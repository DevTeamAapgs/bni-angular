import { Route } from '@angular/router'
import { SignInAdvanceComponent } from './sign-in-advance/sign-in-advance.component'
import { SignUpAdvanceComponent } from './sign-up-advance/sign-up-advance.component'
import { ForgotPasswordAdvanceComponent } from './forgot-password-advance/forgot-password-advance.component'

export const AUTH_ADVANCE_ROUTES: Route[] = [
  { path: 'sign-in-advance', component: SignInAdvanceComponent },
  { path: 'sign-up-advance', component: SignUpAdvanceComponent },
  {
    path: 'forgot-password-advance',
    component: ForgotPasswordAdvanceComponent,
  },
]
