import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-default-layout',
    imports: [HorizontalAppMenuComponent, RouterModule],
    templateUrl: './default-layout.component.html',
    styles: ``
})
export class DefaultLayoutComponent {}
