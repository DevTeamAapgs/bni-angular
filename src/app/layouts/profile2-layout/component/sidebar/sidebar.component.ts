import { currentYear } from '@/app/common/constants'
import { Footer1Component } from '@/app/components/footer/footer1/footer1.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-sidebar',
    imports: [Footer1Component, RouterLink],
    templateUrl: './sidebar.component.html',
    styles: ``
})
export class SidebarComponent {
  currentYear = currentYear
}
