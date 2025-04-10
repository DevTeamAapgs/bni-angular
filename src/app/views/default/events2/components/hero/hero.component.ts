import { FlatpickrDirective } from '@/app/directive/flatpickr.directive'
import { SelectFormInputDirective } from '@/app/directive/select-form-input.directive'
import { Component } from '@angular/core'

@Component({
    selector: 'app-hero',
    imports: [FlatpickrDirective, SelectFormInputDirective],
    templateUrl: './hero.component.html',
    styles: ``
})
export class HeroComponent {}
