import { Component, inject, TemplateRef } from '@angular/core'
import { CelebrationsComponent } from './components/celebration/celebration.component'
import { UpcomingCelebrationComponent } from './components/upcoming-celebration/upcoming-celebration.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { NewsComponent } from './components/news/news.component'
import { FollowComponent } from './components/follow/follow.component'
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-celebration',
    imports: [
        CelebrationsComponent,
        UpcomingCelebrationComponent,
        TopbarComponent,
        SidebarComponent,
        NewsComponent,
        FollowComponent,
        NewsComponent,
    ],
    templateUrl: './celebration.component.html',
    styles: ``,
    providers: [NgbActiveOffcanvas]
})
export class CelebrationComponent {
  private offcanvasService = inject(NgbOffcanvas)

  sidebarContent() {
    this.offcanvasService.open(SidebarComponent)
  }
}
