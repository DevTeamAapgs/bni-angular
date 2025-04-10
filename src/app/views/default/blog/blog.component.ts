import { Component } from '@angular/core'
import { LatestBlogComponent } from './components/latest-blog/latest-blog.component'
import { PostsComponent } from './components/posts/posts.component'
import { FollowComponent } from './components/follow/follow.component'
import { TagsComponent } from './components/tags/tags.component'
import { Footer3Component } from '@/app/components/footer/footer3/footer3.component'

@Component({
    selector: 'app-blog',
    imports: [
        LatestBlogComponent,
        PostsComponent,
        FollowComponent,
        TagsComponent,
        Footer3Component,
    ],
    templateUrl: './blog.component.html',
    styles: ``
})
export class BlogComponent {}
