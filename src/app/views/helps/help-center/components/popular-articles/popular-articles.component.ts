import { Component } from '@angular/core'
import { articles, recommededTopics } from '../../data'
import { DecimalPipe } from '@angular/common'

@Component({
    selector: 'app-popular-articles',
    imports: [DecimalPipe],
    templateUrl: './popular-articles.component.html',
    styles: ``
})
export class PopularArticlesComponent {
  allArticles = articles
  public isSpinner: boolean = true
}
