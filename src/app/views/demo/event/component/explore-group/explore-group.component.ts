import { Component } from '@angular/core'
import { exploregroupData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'event-explore-group',
    imports: [RouterLink],
    templateUrl: './explore-group.component.html',
    styles: ``
})
export class ExploreGroupComponent {
  allExploregroupData = exploregroupData
}
