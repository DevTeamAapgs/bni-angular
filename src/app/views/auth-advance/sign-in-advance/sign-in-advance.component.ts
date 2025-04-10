import { currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-sign-in-advance',
    imports: [RouterLink],
    templateUrl: './sign-in-advance.component.html',
    styles: ``
})
export class SignInAdvanceComponent {
  currentYear = currentYear
}
