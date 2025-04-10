import { Component } from '@angular/core'
import { PopularComponent } from './components/popular/popular.component'
import { PopularArticlesComponent } from './components/popular-articles/popular-articles.component'
import { RecommendedToicsComponent } from './components/recommended-topics/recommended-topics.component'

@Component({
    selector: 'app-help-center',
    imports: [
        PopularComponent,
        PopularArticlesComponent,
        RecommendedToicsComponent,
    ],
    templateUrl: './help-center.component.html',
    styles: ``
})
export class HelpCenterComponent {}
