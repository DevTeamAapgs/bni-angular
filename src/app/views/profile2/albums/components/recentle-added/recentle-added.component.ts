import { Component } from '@angular/core'
import { LightgalleryModule } from 'lightgallery/angular'
import { albumPhotos } from '../../data'

@Component({
    selector: 'albums-recentle-added',
    imports: [LightgalleryModule],
    templateUrl: './recentle-added.component.html',
    styleUrl: './recentle-added.component.scss'
})
export class RecentleAddedComponent {
  allAlbumPhotos = albumPhotos

  settings = {
    counter: false,
    selector: '.lightBox',
    download: false,
  }
}
