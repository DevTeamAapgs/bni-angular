import { Component, OnInit, TemplateRef } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  aboutDetail,
  experienceItems,
  friendsData,
  navItems,
  profileDetail,
} from './data'
import { CommonModule } from '@angular/common'
import { NgbDropdownModule, NgbOffcanvas, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { LightgalleryModule } from 'lightgallery/angular'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
    selector: 'app-profile-content',
    imports: [
        RouterModule,
        NgbDropdownModule,
        CommonModule,
        NgbTooltipModule,
        ReactiveFormsModule,
        FormsModule,
        LightgalleryModule,
        NgbTooltipModule
    ],
    standalone: true,

    templateUrl: './profile-content.component.html',
    styleUrl: './profile-content.component.scss'
})
export class ProfileContentComponent implements OnInit {
  allNavItems = navItems
  allProfileDetail = profileDetail
  allAboutDetail = aboutDetail
  allExperienceItems = experienceItems
  allFriendsData = friendsData

  settings = {
    counter: false,
    selector: 'a',
  }
  modalReference:any;
  userData:any;
  editProfileForm!: FormGroup;
profilePreview: string | ArrayBuffer | null = null;
bannerPreview: string | ArrayBuffer | null = null;
defaultAvatar:any = "assets/images/avatar/07.jpeg";
defaultBanner:any = 'assets/images/bg/05.jpg'; 

constructor(private formBuild:FormBuilder ,private offcanvasService: NgbOffcanvas){}

ngOnInit(): void {
  this.editProfileForm = this.formBuild.group({
    fullName: ['Rakesh Babu'],
    email: ['emeraldenterprises@gmail.com'],
    phone: ['9360557891'],
    country: ['India'],
    bio: ['Ahoy.. Fun Packed Knowledged Fellow. Sailing in the Coding Ocean to find the Forbidden Treasure.'],
    dob: ['1990-05-27'],
    profilePic: [null],
    backgroundPic: [null],
  });
} 

  openTemplate(template:TemplateRef<null>, data?:any,className:string ='lead-canvas'){
      
      this.modalReference = this.offcanvasService.open(template, {
        animation: true,
        position: "end",
        backdrop: "static",
        panelClass: className
      });
  
      if (data) {
        this.userData = data;
      }
    }
    
onFileChange(event: any, type: 'profilePic' | 'backgroundPic') {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'profilePic') {
        this.profilePreview = reader.result;
        this.editProfileForm.patchValue({ profilePic: file });
      } else {
        this.bannerPreview = reader.result;
        this.editProfileForm.patchValue({ backgroundPic: file });
      }
    };
    reader.readAsDataURL(file);
  }
}

onEditProfileSubmit() {
  if (this.editProfileForm.valid) {
    
  }
}
    
}
