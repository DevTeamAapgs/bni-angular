import { Component } from '@angular/core'
import { HeroComponent } from './component/hero/hero.component'
import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { DiscoverEventComponent } from './component/discover-event/discover-event.component'
import { ConferenceComponent } from './component/conference/conference.component'
import { DestinationComponent } from './component/destination/destination.component'
import { ExploreGroupComponent } from './component/explore-group/explore-group.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'

@Component({
    selector: 'app-event',
    imports: [
        HeroComponent,
        HorizontalAppMenuComponent,
        DiscoverEventComponent,
        ConferenceComponent,
        DestinationComponent,
        ExploreGroupComponent,
        Footer2Component,
    ],
    templateUrl: './event.component.html',
    styles: ``
})
export class EventComponent {}
