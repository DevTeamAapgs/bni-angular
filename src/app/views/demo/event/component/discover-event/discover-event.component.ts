import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { discoverData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'event-discover-event',
    imports: [NgbDropdownModule, RouterLink],
    templateUrl: './discover-event.component.html',
    styles: ``
})
export class DiscoverEventComponent {
  allDiscoverData = discoverData
}
