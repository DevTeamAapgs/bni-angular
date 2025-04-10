import {
  AfterViewInit,
  Component,
  inject,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import {
  NgbActiveOffcanvas,
  NgbNav,
  NgbNavContent,
  NgbNavModule,
  NgbOffcanvas,
  NgbOffcanvasModule,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap'
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component'

@Component({
    selector: 'app-settings',
    imports: [
        NgbNavModule,
        NgbOffcanvasModule,
        MenuSidebarComponent,
    ],
    templateUrl: './settings.component.html',
    styles: ``,
    providers: [NgbActiveOffcanvas, NgbNav]
})
export class SettingsComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  open() {
    this.offcanvasService.open(MenuSidebarComponent)
    // offcanvasRef.componentInstance.nav = this.nav;
  }
}
