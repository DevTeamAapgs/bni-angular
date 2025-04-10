import { Component } from '@angular/core'
import { videoData } from '../../data'

@Component({
    selector: 'landing-discover',
    imports: [],
    templateUrl: './discover.component.html',
    styles: ``
})
export class DiscoverComponent {
  videoData = videoData
}
