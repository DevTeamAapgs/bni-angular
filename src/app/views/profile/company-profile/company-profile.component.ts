import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  imports:[FormsModule, CommonModule],
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company = {
    logoUrl: '../../../../../public/assets/images/logo/11.svg',
    name: 'Emerald Enterprises',
    industry: 'Technology & Defense',
    description: 'Emerald Enterprises is a leader in innovation, working across tech, defense, and renewable energy sectors to make Gotham — and the world — a better place.',
    email: 'contact@emeraldenterprises.com',
    phone: '+1 (555) 123-4567',
    address: '1007 Mountain Drive, Madurai'
  };
  logoPreview: string = 'https://via.placeholder.com/150';
  companyName: string = 'Emerald Enterprises';
  companyEmail: string = 'emarald2001@gmail.com';
  address: string = '1007 Mountain Drive, Madurai';

  // Attachment handling
  attachments: any = [];

  // Service handling
  serviceInput: string = '';
  services: string[] = ['Technology R&D', 'Defense Systems'];
  predefinedServices: string[] = ['Logistics', 'Cybersecurity', 'AI Research', 'Weapons Development'];
  
  // Companies handling
  companyInput: string = 'BNI';
  companies: string[] = ['Acrowell'];
  predefinedCompanies: string[] = ['Welcore', 'Ruby'];
  categoryInput:string = "IT & Security"
  companyUrl: string = 'https://emeraldenterprises.com';


  constructor() { }

  ngOnInit() {
  }
  onLogoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.logoPreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.attachments.push(files[i]);
      }
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  addServiceFromInput() {
    if (this.serviceInput.trim() && !this.services.includes(this.serviceInput.trim())) {
      this.services.push(this.serviceInput.trim());
    }
    this.serviceInput = '';
  }
 

  addService(option: string) {
    if (!this.services.includes(option)) {
      this.services.push(option);
    }
  }
  

  removeService(index: number) {
    this.services.splice(index, 1);
  }

  // Companies
  removeCompanies(index: number) {
    this.companies.splice(index, 1);
  }

  addCompany(option: string) {
    if (!this.companies.includes(option)) {
      this.companies.push(option);
    }
  }
  addCompanyFromInput() {
    if (this.companyInput.trim() && !this.companies.includes(this.companyInput.trim())) {
      this.companies.push(this.companyInput.trim());
    }
    this.companyInput = '';
  }
}
