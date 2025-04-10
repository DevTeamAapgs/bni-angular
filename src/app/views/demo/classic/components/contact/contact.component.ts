import { Component } from '@angular/core'
import { contactData } from '../../data'
import { CommonModule } from '@angular/common'
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx'

@Component({
    selector: 'classic-contact',
    imports: [CommonModule, OverlayscrollbarsModule],
    templateUrl: './contact.component.html',
    styles: ``
})
export class ContactComponent {
  allContactList = contactData

  sidebarToggleEnd() {
    const sidebar = document.getElementsByClassName('.sidebar-end-toggle')
    if (sidebar) {
      document.body.classList.toggle('sidebar-end-enabled')
    }
  }
}
