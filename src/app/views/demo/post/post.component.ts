import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { covidData, postData } from './data'
import { RouterModule } from '@angular/router'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { TinySliderSettings } from 'tiny-slider'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { PlyrDirective } from '@/app/directive/playr.directive'
@Component({
    selector: 'app-post',
    imports: [
        NgbNavModule,
        NgbDropdownModule,
        RouterModule,
        TinySliderComponent,
        LightgalleryModule,
        PlyrDirective,
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
