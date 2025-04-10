import { Component, inject, OnInit, ViewChild } from '@angular/core'
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router'
import { TitleService } from './services/title.service'
import { NgProgressComponent, NgProgressModule } from 'ngx-progressbar'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NgProgressModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private titleService = inject(TitleService)

  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent
  private router = inject(Router)

  constructor() {
    this.router.events.subscribe((event: Event) => {
      this.checkRouteChange(event)
    })
  }
  ngOnInit(): void {
    this.titleService.init()
  }
  // show Loader when route change
  checkRouteChange(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.progressBar.start()
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.progressBar.complete()
      }, 200)
    }
  }
}
