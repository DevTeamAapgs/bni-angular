import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'post-details',
    imports: [NgbDropdownModule],
    templateUrl: './details.component.html',
    styles: ``
})
export class DetailsComponent {
  public isActive: boolean = false
  public isSpinner: boolean = false
}
