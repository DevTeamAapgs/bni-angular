import { Component } from '@angular/core'
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx'
import { lefSidebarData } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'classic-leftsidebar',
    imports: [OverlayscrollbarsModule, RouterModule],
    templateUrl: './leftsidebar.component.html',
    styles: ``
})
export class LeftsidebarComponent {
  allNavigationData = lefSidebarData
}
