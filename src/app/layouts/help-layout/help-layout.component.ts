import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { Footer3Component } from '@/app/components/footer/footer3/footer3.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-help-layout',
    imports: [HorizontalAppMenuComponent, RouterModule, Footer3Component],
    templateUrl: './help-layout.component.html',
    styles: ``
})
export class HelpLayoutComponent {}
