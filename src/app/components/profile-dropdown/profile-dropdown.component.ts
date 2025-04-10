import {
  storageThemeKey,
  ThemeModeService,
} from '@/app/services/theme-mode.service'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-profile-dropdown',
    imports: [NgbDropdownModule, RouterLink, CommonModule],
    templateUrl: './profile-dropdown.component.html',
    styles: ``
})
export class ProfileDropdownComponent {
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
}
