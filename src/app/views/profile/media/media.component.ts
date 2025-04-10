import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
@Component({
    selector: 'app-media',
    imports: [LightgalleryModule, NgbDropdownModule],
    templateUrl: './media.component.html',
    styleUrl: './media.component.scss'
})
export class MediaComponent {
  lightImage = [
    'assets/images/albums/01.jpg',
    'assets/images/albums/02.jpg',
    'assets/images/albums/03.jpg',
    'assets/images/albums/04.jpg',
    'assets/images/albums/05.jpg',
    'assets/images/albums/06.jpg',
  ]

  settings = {
    counter: false,
    download: false,
    thumbnail: false,
    selector: '.a',
    loop: false,
  }
}
