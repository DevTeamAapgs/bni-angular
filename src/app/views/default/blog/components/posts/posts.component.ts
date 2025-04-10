import { Component } from '@angular/core'
import { recentPost } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'blog-posts',
    imports: [RouterLink],
    templateUrl: './posts.component.html',
    styles: ``
})
export class PostsComponent {
  allRecentPost = recentPost
}
