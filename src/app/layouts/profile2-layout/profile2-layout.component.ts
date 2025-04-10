import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { Component, inject, TemplateRef } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SidebarComponent } from './component/sidebar/sidebar.component'
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-profile2-layout',
    imports: [
        HorizontalAppMenuComponent,
        RouterModule,
        SidebarComponent,
    ],
    templateUrl: './profile2-layout.component.html',
    styles: ``,
    providers: [NgbActiveOffcanvas]
})
export class Profile2LayoutComponent {
  public offcanvasService = inject(NgbOffcanvas)
  activeOffcanvas = inject(NgbActiveOffcanvas)

  openSidebarProfile() {
    this.offcanvasService.open(SidebarComponent)
  }
}
