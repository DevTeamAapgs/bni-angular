import { Component, inject, Input, TemplateRef } from '@angular/core'
import { suggestStories } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import { TinySliderSettings } from 'tiny-slider'
import { peopleInfo, pollOptions } from '@/app/views/demo/classic/data'
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap'
import { PlyrDirective } from '@/app/directive/playr.directive'
import {
  DROPZONE_CONFIG,
  DropzoneConfigInterface,
  DropzoneModule,
} from 'ngx-dropzone-wrapper'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { noWhitespaceValidator } from '../../../../../../../validator/no-whitespace-validator'
import { RouterModule } from '@angular/router'

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
    selector: 'app-content',
    standalone: true,
    imports: [
        TinySliderComponent,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        PlyrDirective,
        NgbModalModule,
        DropzoneModule,RouterModule
    ],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG,
        },
    ],
    templateUrl: './content.component.html',
    styles: ``
})

export class ContentComponent {
  @Input() showPreview: boolean = false
  @Input() isSpinner: boolean = false
  @Input() isSpinner1: boolean = false
  @Input() isSpinner2: boolean = false
  @Input() isSpinner3: boolean = false
  @Input() isSpinner4: boolean = false
  
  postForm!:FormGroup;
  
  public isActive: boolean = false
  dropzoneConfig: DropzoneConfigInterface = {
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    clickable: true,
    addRemoveLinks: true,
  }
  constructor(private formBuild:FormBuilder){}





  uploadedFiles: any[] = []
  private modalService = inject(NgbModal)
  
  allSuggestStories = suggestStories
  pollOptions = pollOptions
  peopleInfo = peopleInfo

  defaultSliderSetting: TinySliderSettings = {
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
        items: 4,
      },
    },
  }
  imagePreview: string | ArrayBuffer | null = null;

  peopleSliderSetting: TinySliderSettings = {
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
    this.postForm = this.formBuild.group({
      postContent: ['', [Validators.required, noWhitespaceValidator()]],
      image: [null]

    })
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
  
    if (file) {
      this.postForm.patchValue({ image: file });
      this.postForm.get('image')?.updateValueAndValidity();
  
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitPost() {
    alert("post Added")
    const postText = this.postForm.value.postContent;
    const imageFile = this.postForm.value.image;
  
    console.log('Post Text:', postText);
    console.log('Image File:', imageFile);
  
    // You can now send `postText` and `imageFile` to your API/formData, etc.
  
    // Reset
    if(postText!='' || postText!=null ){
      this.postForm.reset();
      this.imagePreview = null;

    }
  }
  

  removeImage() {
    this.imagePreview = null;
    this.postForm.patchValue({ image: null });
    this.postForm.get('image')?.updateValueAndValidity();
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
