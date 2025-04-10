import { Component } from '@angular/core'
import { timelineData } from './data'

@Component({
    selector: 'app-activity',
    imports: [],
    templateUrl: './activity.component.html',
    styles: ``
})
export class ActivityComponent {
  allTimelineData = timelineData
  public isActive: boolean = true
}
