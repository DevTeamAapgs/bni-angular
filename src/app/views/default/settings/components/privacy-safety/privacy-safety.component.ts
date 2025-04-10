import { Component, inject, TemplateRef } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'setting-privacy-safety',
    imports: [],
    templateUrl: './privacy-safety.component.html',
    styles: ``
})
export class PrivacySafetyComponent {
  private modalService = inject(NgbModal)

  openLogin(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }
}
