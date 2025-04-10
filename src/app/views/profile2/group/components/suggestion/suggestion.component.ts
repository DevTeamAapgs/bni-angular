import { Component } from '@angular/core'
import { groupsData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'group-suggestion',
    imports: [RouterLink],
    templateUrl: './suggestion.component.html',
    styles: ``
})
export class SuggestionComponent {
  allGroupsData = groupsData
}
