import { Component } from '@angular/core'

@Component({
    selector: 'blog-tags',
    imports: [],
    templateUrl: './tags.component.html',
    styles: ``
})
export class TagsComponent {
  tags = [
    'blog',
    'business',
    'theme',
    'social',
    'getbootstrap',
    'design',
    'news',
    'magazine',
    'events',
  ]
}
