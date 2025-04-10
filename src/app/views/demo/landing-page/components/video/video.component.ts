import { PlyrDirective } from '@/app/directive/playr.directive'
import { Component } from '@angular/core'

@Component({
    selector: 'landing-video',
    imports: [PlyrDirective],
    templateUrl: './video.component.html',
    styles: ``
})
export class VideoComponent {}
