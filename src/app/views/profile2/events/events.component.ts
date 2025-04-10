import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbAlertModule,
  NgbDropdownModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap'
import { TopComponent } from './components/top/top.component'
import { LocalComponent } from './components/local/local.component'
import { ThisWeekComponent } from './components/this-week/this-week.component'
import { FriendsComponent } from './components/friends/friends.component'
import { FollowingComponent } from './components/following/following.component'
import { currentYear } from '@/app/common/constants'

@Component({
    selector: 'app-events',
    imports: [
        NgbAlertModule,
        NgbNavModule,
        RouterModule,
        NgbDropdownModule,
        TopComponent,
        LocalComponent,
        ThisWeekComponent,
        FriendsComponent,
        FollowingComponent,
    ],
    templateUrl: './events.component.html',
    styles: ``
})
export class EventsComponent {
  staticAlertClosed = false
  currentYear = currentYear
}
