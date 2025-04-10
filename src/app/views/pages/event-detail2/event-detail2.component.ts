import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { Component } from '@angular/core'
import { OverviewComponent } from './component/overview/overview.component'
import { HomeComponent } from './component/home/home.component'
import { Footer2Component } from '@/app/components/footer/footer2/footer2.component'

@Component({
    selector: 'app-event-detail2',
    imports: [
        HorizontalAppMenuComponent,
        OverviewComponent,
        HomeComponent,
        Footer2Component,
    ],
    templateUrl: './event-detail2.component.html',
    styles: ``
})
export class EventDetail2Component {}
