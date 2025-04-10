import { Component } from '@angular/core'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { ShowComponent } from './components/show/show.component'
import { LiveComponent } from './components/live/live.component'
import { HomeComponent } from './components/home/home.component'
import { SavedVideoComponent } from './components/saved-video/saved-video.component'

@Component({
    selector: 'app-post-video',
    imports: [
        NgbNavModule,
        ShowComponent,
        LiveComponent,
        HomeComponent,
        SavedVideoComponent,
    ],
    templateUrl: './post-video.component.html',
    styles: ``
})
export class PostVideoComponent {}
