import { Component } from '@angular/core'
import { followData } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'blog-follow',
    imports: [CommonModule],
    templateUrl: './follow.component.html',
    styles: ``
})
export class FollowComponent {
  followData = followData
}
