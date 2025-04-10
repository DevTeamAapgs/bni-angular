import { Component, inject, Input, TemplateRef } from '@angular/core'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import {
  NgbDropdownModule,
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap'
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper'
import { DropzoneModule } from 'ngx-dropzone-wrapper'
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper'
import { noWhitespaceValidator } from '../../../../../validator/no-whitespace-validator'

type UploadedFile = {
  name: string
  size: number
  type: string
  dataURL?: string
}

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
}
@Component({
    selector: 'app-profile',
    imports: [NgbDropdownModule, NgbModalModule, DropzoneModule,FormsModule,ReactiveFormsModule],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG,
        },
    ],
    templateUrl: './profile.component.html',
    styles: ``
})
export class ProfileComponent {
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
  imagePreview: string | ArrayBuffer | null = null;


  postForm!:FormGroup;
  private modalService = inject(NgbModal)
constructor(private formBuild:FormBuilder){}
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
