import { Component } from '@angular/core'
import { questionsData } from '../../data'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-popular',
    imports: [RouterLink],
    templateUrl: './popular.component.html',
    styles: ``
})
export class PopularComponent {
  allQuestionsData = questionsData
}
