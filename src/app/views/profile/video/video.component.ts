import { AfterViewChecked, AfterViewInit, Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import { videoData } from './data'
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import { LightGallery } from 'lightgallery/lightgallery'
@Component({
    selector: 'app-video',
    imports: [LightgalleryModule],
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent {
  allVideoData = videoData

  settings = {
    counter: false,
    dynamic: true,
    plugins: [lgZoom, lgThumbnail, lgVideo],
    selector: '.icon-md',
  }
}
