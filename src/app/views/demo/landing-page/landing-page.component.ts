import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { VideoComponent } from './components/video/video.component'
import { MessagingComponent } from './components/messaging/messaging.component'
import { FeaturesComponent } from './components/features/features.component'
import { DiscoverComponent } from './components/discover/discover.component'
import { BannerComponent } from './components/banner/banner.component'
import { ActionComponent } from './components/action/action.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'

@Component({
    selector: 'app-landing-page',
    imports: [
        TopbarComponent,
        VideoComponent,
        MessagingComponent,
        FeaturesComponent,
        DiscoverComponent,
        BannerComponent,
        ActionComponent,
        Footer2Component,
    ],
    templateUrl: './landing-page.component.html',
    styles: ``
})
export class LandingPageComponent {}
