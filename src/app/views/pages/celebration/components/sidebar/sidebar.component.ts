import { credits, currentYear } from '@/app/common/constants'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-sidebar',
    imports: [Footer1Component, RouterLink],
    templateUrl: './sidebar.component.html',
    styles: ``
})
export class SidebarComponent {
  activeOffcanvas = inject(NgbActiveOffcanvas)
  credits = credits
  currentYear = currentYear
}
