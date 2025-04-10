import { Component } from '@angular/core'
import { eventsData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'events-top',
    imports: [RouterLink],
    templateUrl: './top.component.html',
    styles: ``
})
export class TopComponent {
  allEventsData = eventsData
}
