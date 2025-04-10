import {
  Component,
  EventEmitter,
  inject,
  Output,
  TemplateRef,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  NgbActiveOffcanvas,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap'
import { VerticalSidebarComponent } from './component/vertical-sidebar/vertical-sidebar.component'
import { Footer4Component } from '@/app/components/footer/footer4/footer4.component'
import {
  storageThemeKey,
  ThemeModeService,
} from '@/app/services/theme-mode.service'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-video-layout',
    imports: [
        RouterModule,
        NgbCollapseModule,
        NgbDropdownModule,
        VerticalSidebarComponent,
        Footer4Component,
        CommonModule,
    ],
    templateUrl: './video-layout.component.html',
    styles: ``,
    providers: [NgbActiveOffcanvas]
})
export class VideoLayoutComponent {
  isCollapsed = true
  private offcanvasService = inject(NgbOffcanvas)
  public themeModeService = inject(ThemeModeService)
  preferredTheme: string = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'
  getTheme = localStorage.getItem(storageThemeKey)
  mode: string = this.getTheme ? this.getTheme : this.preferredTheme

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.mode = mode
    this.themeModeService.updateTheme(mode)
  }

  openMenu() {
    this.offcanvasService.open(VerticalSidebarComponent)
  }
}
