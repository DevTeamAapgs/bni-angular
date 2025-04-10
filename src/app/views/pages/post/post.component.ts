import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { PlyrDirective } from '@/app/directive/playr.directive'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { TinySliderSettings } from 'tiny-slider'
import { covidData, postData } from './data'
import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'

@Component({
    selector: 'app-post',
    imports: [
        NgbNavModule,
        NgbDropdownModule,
        RouterModule,
        TinySliderComponent,
        LightgalleryModule,
        PlyrDirective,
        HorizontalAppMenuComponent,
    ],
    templateUrl: './post.component.html',
    styleUrl: './post.component.scss'
})
export class PostComponent {
  allCovidData = covidData
  allPostData = postData

  articleSliderSetting: TinySliderSettings = {
    autoplay: true,
    nav: true,
    arrowKeys: false,
    controls: false,
    gutter: 0,
    edgePadding: 0,
    items: 1,
  }

  settings = { counter: false, plugins: [lgVideo], selector: 'a' }
}
