import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'pages-celebration',
    imports: [RouterLink,NgbDropdownModule],
    templateUrl: './celebration.component.html',
    styles: ``
})
export class CelebrationsComponent {}
