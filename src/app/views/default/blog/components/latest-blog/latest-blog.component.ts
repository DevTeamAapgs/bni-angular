import { Component } from '@angular/core'
import { blogsData } from '../../data'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-latest-blog',
    imports: [NgbPaginationModule, RouterLink],
    templateUrl: './latest-blog.component.html',
    styles: ``
})
export class LatestBlogComponent {
  allBlogData = blogsData
}
