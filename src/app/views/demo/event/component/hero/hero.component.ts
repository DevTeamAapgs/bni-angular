import { Component } from '@angular/core'
import { events } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'event-hero',
    imports: [RouterModule],
    templateUrl: './hero.component.html',
    styles: ``
})
export class HeroComponent {
  allEventData = events
}
