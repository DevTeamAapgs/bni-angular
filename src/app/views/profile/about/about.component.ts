import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { interestData, profileInfo } from './data'

@Component({
    selector: 'app-about',
    imports: [NgbDropdownModule, CommonModule],
    templateUrl: './about.component.html',
    styles: ``
})
export class AboutComponent {
  allProfileInfo = profileInfo
  allInterestData = interestData
}
