import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { notifications } from './data'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-notification',
    imports: [NgbDropdownModule, CommonModule],
    templateUrl: './notification.component.html',
    styles: ``
})
export class NotificationComponent {
  notifications = notifications
  public isSpinner: boolean = true
}
