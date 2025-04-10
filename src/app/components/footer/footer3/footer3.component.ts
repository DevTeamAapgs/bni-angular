import { credits, currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-footer3',
    imports: [RouterLink],
    templateUrl: './footer3.component.html',
    styles: ``
})
export class Footer3Component {
  credits = credits
  currentYear = currentYear
}
