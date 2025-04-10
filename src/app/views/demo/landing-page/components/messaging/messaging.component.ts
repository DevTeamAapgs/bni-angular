import { Component } from '@angular/core'
import { landingMessageData } from '../../data'

@Component({
    selector: 'landing-messaging',
    imports: [],
    templateUrl: './messaging.component.html',
    styles: ``
})
export class MessagingComponent {
  landingMessageData = landingMessageData
}
