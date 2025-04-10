import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { FeedComponent } from './components/feed/feed.component'
import { MediaComponent } from './components/media/media.component'
import { AboutComponent } from './components/about/about.component'
import { ConnectionComponent } from './components/connection/connection.component'
import { EventsComponent } from './components/events/events.component'
import { VideosComponent } from './components/videos/videos.component'

@Component({
    selector: 'app-group-detail',
    imports: [
        NgbNavModule,
        NgbDropdownModule,
        FeedComponent,
        MediaComponent,
        AboutComponent,
        ConnectionComponent,
        EventsComponent,
        VideosComponent,
    ],
    templateUrl: './group-detail.component.html',
    styles: ``
})
export class GroupDetailComponent {}
