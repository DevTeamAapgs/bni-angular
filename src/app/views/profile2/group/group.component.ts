import { Component, inject, TemplateRef } from '@angular/core'
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { FrdGrpComponent } from './components/frd-grp/frd-grp.component'
import { SuggestionComponent } from './components/suggestion/suggestion.component'
import { PopularComponent } from './components/popular/popular.component'
import { MoreSuggestionComponent } from './components/more-suggestion/more-suggestion.component'

@Component({
    selector: 'app-group',
    imports: [
        NgbNavModule,
        FrdGrpComponent,
        SuggestionComponent,
        PopularComponent,
        MoreSuggestionComponent,
    ],
    templateUrl: './group.component.html',
    styles: ``
})
export class GroupComponent {
  private modalService = inject(NgbModal)

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }
}
