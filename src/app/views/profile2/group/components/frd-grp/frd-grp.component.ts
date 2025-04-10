import { Component } from '@angular/core'
import { groupsData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'group-frd-grp',
    imports: [RouterLink],
    templateUrl: './frd-grp.component.html',
    styles: ``
})
export class FrdGrpComponent {
  allGroupsData = groupsData
}
