import { HorizontalAppMenuComponent } from '@/app/components/app-menu/horizontal-app-menu/horizontal-app-menu.component'
import { Component, inject } from '@angular/core'
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbOffcanvasModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap'
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx'
import { Chat, ChatMessage, chats } from './data'
import { SimplebarAngularModule } from 'simplebar-angular'
import { CommonModule } from '@angular/common'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { timestamp } from 'rxjs'

@Component({
    selector: 'app-message',
    imports: [
        NgbTooltipModule,
        NgbDropdownModule,
        HorizontalAppMenuComponent,
        NgbNavModule,
        OverlayscrollbarsModule,
        SimplebarAngularModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbOffcanvasModule,
    ],
    templateUrl: './message.component.html',
    styles: ``
})
export class MessageComponent {
  allchats: Chat[] = chats
  messagesList = chats
  formData!: UntypedFormGroup
  chat!: Chat
  public formBuilder = inject(UntypedFormBuilder)

  ngOnInit(): void {
    this.chat = this.allchats[0]

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    })
  }

  getLastMessage(chat: Chat) {
    return (
      chat.messages[chat.messages.length - 1]?.msg.text ||
      chat.messages[chat.messages.length - 2]?.msg.text
    )
  }

  // Example method to select a chat
  selectChat(chat: Chat) {
    this.chat = chat
  }

  messageSend() {
    const message = this.formData.get('message')!.value?.trim()
    if (this.formData.valid && message) {
      const now = new Date()
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(now)

      const newMessage = {
        id: this.chat.messages.length + 1,
        msg: { text: message },
        timeStamp: formattedTime,
        isSender: true,
      }
      this.chat.messages.push(newMessage)
      this.formData.reset()
    }
  }
  open() {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    offcanvasElement?.classList.toggle('show')
  }
  close() {
    const offcanvasElement = document.getElementById('offcanvasNavbar')
    offcanvasElement?.classList.remove('show')
  }
}
