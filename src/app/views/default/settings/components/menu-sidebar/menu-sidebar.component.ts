import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { AccountComponent } from '../account/account.component'
import { CloseAccountComponent } from '../close-account/close-account.component'
import { CommunicationComponent } from '../communication/communication.component'
import { MessagingComponent } from '../messaging/messaging.component'
import { NotificationComponent } from '../notification/notification.component'
import { PrivacySafetyComponent } from '../privacy-safety/privacy-safety.component'
import { currentYear } from '@/app/common/constants'

@Component({
    selector: 'app-menu-sidebar',
    imports: [
        AccountComponent,
        CloseAccountComponent,
        CommunicationComponent,
        MessagingComponent,
        NotificationComponent,
        PrivacySafetyComponent,
        NgbNavModule,
        Footer1Component,
    ],
    templateUrl: './menu-sidebar.component.html',
    styles: ``
})
export class MenuSidebarComponent {
  currentYear = currentYear
  open() {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    offcanvasElement?.classList.toggle('show')
  }
  close() {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    offcanvasElement?.classList.remove('show')
  }
}
