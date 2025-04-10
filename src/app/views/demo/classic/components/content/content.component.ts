import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { Component, inject, Input, TemplateRef } from '@angular/core'
import {
  NgbModal,
  NgbModalModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { TinySliderSettings } from 'tiny-slider'
import { peopleInfo, pollOptions } from '../../data'
import { CommentComponent } from '../comment/comment.component'
import { CardFooterComponent } from '../card-footer/card-footer.component'
import {
  DROPZONE_CONFIG,
  DropzoneConfigInterface,
  DropzoneModule,
} from 'ngx-dropzone-wrapper'
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
    selector: 'classic-content',
    imports: [
        NgbTooltipModule,
        TinySliderComponent,
        CommentComponent,
        NgbModalModule,
        DropzoneModule,
        CardFooterComponent,
    ],
    templateUrl: './content.component.html',
    styles: ``,
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG,
        },
    ]
})
export class ContentComponent {
  public isSpinner: boolean = false
  public isSpinner1: boolean = false
  public isSpinner2: boolean = false
  public isSpinner3: boolean = false
  public isSpinner4: boolean = false
  public isSpinner5: boolean = false
  public isSpinner6: boolean = false

  @Input() showPreview: boolean = false
  dropzoneConfig: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    clickable: true,
    addRemoveLinks: true,
  }
  uploadedFiles: any[] = []
  private modalService = inject(NgbModal)

  pollOptions = pollOptions
  peopleInfo = peopleInfo

  articleSliderSetting: TinySliderSettings = {
    autoplay: true,
    nav: false,
    arrowKeys: true,
    controls: true,
    controlsText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    gutter: 12,
    edgePadding: 30,
    nested: 'inner',
    responsive: {
      1: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  }
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
