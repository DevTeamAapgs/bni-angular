import { Component, inject, Input, TemplateRef } from '@angular/core'
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap'
import { DropzoneModule } from 'ngx-dropzone-wrapper'
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper'
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper'

type UploadedFile = {
  name: string
  size: number
  type: string
  dataURL?: string
}
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
}

@Component({
    selector: 'group-detail-feed',
    imports: [NgbModalModule, NgbDropdownModule, DropzoneModule],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG,
        },
    ],
    templateUrl: './feed.component.html',
    styles: ``
})
export class FeedComponent {
  public isActive: boolean = false
  public isSpinner: boolean = false

  dropzoneConfig: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    clickable: true,
    addRemoveLinks: true,
  }
  @Input() showPreview: boolean = false
  uploadedFiles: any[] = []
  private modalService = inject(NgbModal)

  ngOnInit(): void {
    if (this.showPreview == true) {
      this.dropzoneConfig.previewsContainer = false
    }
  }

  openPhoto(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }
  openVideo(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }
  openEvent(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }
  openFeeling(content: TemplateRef<any>) {
    this.modalService.open(content, { size: 'md' })
  }

  // File Upload
  imageURL: string = ''
  onUploadSuccess(event: UploadedFile[]) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0])
    }, 0)
  }

  // File Remove
  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1)
  }
}
