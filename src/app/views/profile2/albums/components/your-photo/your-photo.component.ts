import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { albumPhotos } from '../../data'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
    selector: 'albums-your-photo',
    imports: [NgbDropdownModule, LightgalleryModule],
    templateUrl: './your-photo.component.html',
    styles: ``
})
export class YourPhotoComponent {
  allAlbumPhotos = albumPhotos

  settings = {
    counter: false,
    selector: '.lightBox',
    download: false,
  }
}
