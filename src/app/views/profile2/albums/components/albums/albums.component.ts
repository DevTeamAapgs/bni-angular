import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import { albumPhotos } from '../../data'

@Component({
    selector: 'albums-tab',
    imports: [NgbDropdownModule, LightgalleryModule],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.scss'
})
export class AlbumsTabComponent {
  allLightGallary = albumPhotos

  settings = {
    counter: false,
    selector: '.lightBox',
  }
}
