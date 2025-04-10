import { Footer3Component } from '@/app/components/footer/footer3/footer3.component'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-error404',
    imports: [Footer3Component, RouterLink],
    templateUrl: './error404.component.html',
    styles: ``
})
export class Error404Component {}
