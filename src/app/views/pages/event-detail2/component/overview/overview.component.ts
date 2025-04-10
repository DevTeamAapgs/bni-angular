import { Component } from '@angular/core'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { FAQsData, scheduleData } from '../../data'

@Component({
    selector: 'event-detail2-overview',
    imports: [NgbAccordionModule],
    templateUrl: './overview.component.html',
    styles: ``
})
export class OverviewComponent {
  AllFAQsData = FAQsData
  scheduleData = scheduleData
}
