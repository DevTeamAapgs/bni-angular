import { Component } from '@angular/core'
import { destinationData } from '../../data'

@Component({
    selector: 'event-destination',
    imports: [],
    templateUrl: './destination.component.html',
    styles: ``
})
export class DestinationComponent {
  allDestinationData = destinationData
}
