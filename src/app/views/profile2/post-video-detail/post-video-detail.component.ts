import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component } from '@angular/core'
import { TinySliderSettings } from 'tiny-slider'
import { reletedVideo } from './data'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-post-video-detail',
    imports: [TinySliderComponent, RouterModule, NgbDropdownModule],
    templateUrl: './post-video-detail.component.html',
    styles: ``
})
export class PostVideoDetailComponent {
  public isActive: boolean = false
  public isSpinner: boolean = false

  allReletedVideo = reletedVideo
  articleSliderSetting: TinySliderSettings = {
    autoplay: false,
    nav: true,
    arrowKeys: true,
    controls: false,
    gutter: 12,
    edgePadding: 0,
    items: 1,
    controlsText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      1: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  }
}
