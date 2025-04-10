import { Component } from '@angular/core'
import { discoverEvent } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-discover',
    imports: [NgbDropdownModule],
    templateUrl: './discover.component.html',
    styles: ``
})
export class DiscoverComponent {
  allDiscoverEvent = discoverEvent
}
