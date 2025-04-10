import { Component } from '@angular/core'
import { albumPhotos } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
    selector: 'albums-photos-of-you',
    imports: [NgbDropdownModule, LightgalleryModule],
    templateUrl: './photos-of-you.component.html',
    styleUrl: './photos-of-you.component.scss'
})
export class PhotosOfYouComponent {
  allAlbumPhotos = albumPhotos

  settings = {
    counter: false,
    selector: '.lightBox',
  }
}
