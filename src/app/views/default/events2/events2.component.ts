import { Component } from '@angular/core'
import { HeroComponent } from './components/hero/hero.component'
import { DiscoverComponent } from './components/discover/discover.component'

@Component({
    selector: 'app-events2',
    imports: [HeroComponent, DiscoverComponent],
    templateUrl: './events2.component.html',
    styles: ``
})
export class Events2Component {}
