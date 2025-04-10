import { Component } from '@angular/core'
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import lgVideo from 'lightgallery/plugins/video'
import { YourPhotoComponent } from './components/your-photo/your-photo.component'
import { RecentleAddedComponent } from './components/recentle-added/recentle-added.component'
import { PhotosOfYouComponent } from './components/photos-of-you/photos-of-you.component'
import { FamilyComponent } from './components/family/family.component'
import { AlbumsTabComponent } from './components/albums/albums.component'

@Component({
    selector: 'app-albums',
    imports: [
        NgbNavModule,
        NgbDropdownModule,
        LightgalleryModule,
        YourPhotoComponent,
        RecentleAddedComponent,
        PhotosOfYouComponent,
        FamilyComponent,
        AlbumsTabComponent,
    ],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  settings = {
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
