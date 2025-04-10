import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pages-celebration-upcoming-celebration',
    imports: [RouterLink,NgbDropdownModule],
    templateUrl: './upcoming-celebration.component.html',
    styles: ``
})
export class UpcomingCelebrationComponent {}
