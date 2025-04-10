import { currentYear } from '@/app/common/constants'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbAlertModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-event',
    imports: [NgbDropdownModule, NgbAlertModule, RouterLink],
    templateUrl: './event.component.html',
    styles: ``
})
export class EventComponent {
  staticAlert = true
  staticAlertClosed = false
  currentYear = currentYear
}
