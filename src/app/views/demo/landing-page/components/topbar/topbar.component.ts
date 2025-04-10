import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'landing-topbar',
    imports: [RouterLink, NgbCollapseModule],
    templateUrl: './topbar.component.html',
    styles: ``
})
export class TopbarComponent {
  isCollapsed = true
}
