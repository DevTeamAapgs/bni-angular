import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { ProfileContentComponent } from '@/app/layouts/profile-layout/components/profile-content/profile-content.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-profile-layout',
    imports: [HorizontalAppMenuComponent, ProfileContentComponent, RouterModule],
    templateUrl: './profile-layout.component.html',
    styles: ``
})
export class ProfileLayoutComponent {}
