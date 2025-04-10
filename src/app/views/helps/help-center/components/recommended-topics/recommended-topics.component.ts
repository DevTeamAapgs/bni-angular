import { Component } from '@angular/core'
import { recommededTopics } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-recommended-toics',
    imports: [RouterLink],
    templateUrl: './recommended-topics.component.html',
    styles: ``
})
export class RecommendedToicsComponent {
  recommededTopics = recommededTopics
}
