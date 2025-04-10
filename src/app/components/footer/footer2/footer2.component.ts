import { credits, currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'

@Component({
    selector: 'app-footer2',
    imports: [],
    templateUrl: './footer2.component.html',
    styles: ``
})
export class Footer2Component {
  credits = credits
  currentYear = currentYear
}
