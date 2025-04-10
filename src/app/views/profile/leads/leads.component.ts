import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbNavModule],
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css'],
})
export class LeadsComponent implements OnInit {
  messages:any = [
    { from: 'Client', attachment: 'proposal.pdf', text: '', time: '11:23 AM' },
    { from: 'You', text: 'Got it!', time: '11:24 AM' }
  ]
  activeTab = '1'; // Default tab open (Requested)

  leads = [
    {
      leadFrom: 'Mark',
      description : 'New Crypto Currency Partners are there to look into your product.',
      avatar: 'https://i.pravatar.cc/40?img=3',
      leads: 5,
      lead_attachments : ['brochure.pdf','client-requiremnt.xls','quote.pdf','client-detail.pdf','reciept.png'],
      messages: [
        {
          from: 'Mark',
          text: 'Can we approve this?',
          time: '10:30 AM',
          status: 'seen',
        },
        {
          from: 'You',
          text: 'Accepted\nSure, all done.',
          attachment: null,
          time: '10:32 AM',
          status: 'seen',
        },
      ],
    },
    {
      leadFrom: 'Beerus',
      description : 'Water Supply chain marketer needs your Product for branding as well as marketing',
      leads: 11,
      avatar: 'https://i.pravatar.cc/40?img=5',
      messages: [
        {
          from: 'Beerus',
          text: 'This needs clarification.',
          time: '9:15 AM',
          status: 'sent',
        },
      ],
    },
  ];

  
  users = [
    { id: '1', name: 'Bruce Wayne' },
    { id: '2', name: 'Clark Kent' },
    { id: '3', name: 'Diana Prince' }
  ];
  
  newLead = {
    leadFrom: '',
    description: '',
    assignedTo: '',
    attachment: null as File | null,
    avatar: '',
    messages: [],
  };
  availableAssignees = ['Bruce Wayne', 'Clark Kent', 'Diana Prince']; // customize this list
	public modalReference: any;
  statusChips = ['Accepted', 'Declined', 'Need Clarification'];
  selectedStatus = ''; // keep it string for single-select chip behavior
  selectedLead: any = null;
  messageText = '';
  selectedFile: File | null = null;
  leadForm!:FormGroup;
  constructor(private offcanvasService: NgbOffcanvas, private fb:FormBuilder) {}

  ngOnInit() {
    this.leadForm = this.fb.group({
      lead_name: [''],
      description: [''],
      assigned_to: ['']
    });
    
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // You can also patch form if storing file ref there
      // this.leadForm.patchValue({ attachment: file });
    }
  }

  openTemplate(template:TemplateRef<null>, data?:any,className:string ='lead-canvas'){
    
    this.modalReference = this.offcanvasService.open(template, {
      animation: true,
      position: "end",
      backdrop: "static",
      panelClass: className
    });

    if (data) {
      this.selectedLead = data;
    }
  }
  
  hasClientAttachments(lead: any): boolean {
    if (!lead || !lead.messages) return false;
    return lead.messages.some((msg:any) => msg.attachment && msg.from !== 'You');
  }
  

  openChat(lead: any) {
    this.selectedLead = lead;
    this.resetForm();
  }
  selectChip(status: string) {
    this.selectedStatus = this.selectedStatus === status ? '' : status;
    console.log(this.selectedStatus,"SELECTED STATUS");
    
  } 
  resetForm() {
    this.messageText = '';
    this.selectedStatus = '';
    this.selectedFile = null;
  }

  handleAttachment(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      
    }
  }

  sendMessage() {
    if (!this.messageText.trim() && !this.selectedFile) return;
  
    const newMessage: any = {
      from: 'You',
      text: this.messageText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };
  
    if (this.selectedStatus) {
      newMessage.tag = this.selectedStatus;
    }
  
    if (this.selectedFile) {
      newMessage.attachment = this.selectedFile.name;
      newMessage.attachmentUrl = URL.createObjectURL(this.selectedFile);
      this.selectedFile = null;
    }
  
    if (this.selectedLead && this.selectedLead.messages) {
      this.selectedLead.messages.push(newMessage);
    }
  
    // Reset input
    this.messageText = '';
    this.selectedStatus = '';

    setTimeout(() => {
      const chatBox = document.querySelector('.offcanvas-body .overflow-auto');
      if (chatBox) {
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    }, 100);
    console.log(this.selectedLead,"this.selectedFile");

  }
  
}
