import { Component } from '@angular/core'
import { features } from '../../data'

@Component({
    selector: 'landing-features',
    imports: [],
    templateUrl: './features.component.html',
    styles: ``
})
export class FeaturesComponent {
  featuresData = features
}
