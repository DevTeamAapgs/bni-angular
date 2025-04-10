import { Component, Input } from '@angular/core'

@Component({
    selector: 'classic-card-footer',
    imports: [],
    templateUrl: './card-footer.component.html',
    styles: ``
})
export class CardFooterComponent {
  @Input() comment!: boolean
  @Input() listClass!: string
}
