import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { ProfileDropdownComponent } from '@/app/components/profile-dropdown/profile-dropdown.component'
import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbCollapseModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap'
import { classicHeader } from '../../data'

@Component({
    selector: 'classic-topbar',
    imports: [
        RouterModule,
        CommonModule,
        LogoBoxComponent,
        NgbDropdownModule,
        ProfileDropdownComponent,
        NgbCollapseModule,
    ],
    templateUrl: './topbar.component.html',
    styles: ``
})
export class TopbarComponent {
  isCollapsed = true
  allclassicHeader = classicHeader
  @Output() sidebarStartOpen = new EventEmitter()

  sidebarStart() {
    this.sidebarStartOpen.emit()
  }
}
