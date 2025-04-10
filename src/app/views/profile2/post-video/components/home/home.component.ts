import { Component } from '@angular/core'
import { postVideoData } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-home',
    imports: [RouterModule],
    templateUrl: './home.component.html',
    styles: ``
})
export class HomeComponent {
  postVideoData = postVideoData
}
