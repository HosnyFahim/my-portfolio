import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  constructor() {}
  ngOnInit(): void {
    
  }
  activeInput: string | null = ''; // Variable zum Speichern des aktiven Eingabefelds
  nameInputValue: string = ''; // Variable zum Speichern des Wertes des "Your Name" Input-Felds
  emailInputValue: string = ''; // Variable zum Speichern des Wertes des "Your Email" Input-Felds
  messageInputValue: string = ''; // Variable zum Speichern des Wertes des "Add Message" Textarea-Felds

  highlightInput(input: string) {
    this.activeInput = input;
  }

  unhighlightInput() {
    this.activeInput = null;
  }

  isInputEmpty(input: string): boolean {
    if (input === 'name') {
      return !this.nameInputValue?.trim();
    } else if (input === 'email') {
      return !this.emailInputValue?.trim();
    } else if (input === 'message') {
      return !this.messageInputValue?.trim();
    }
    return false;
  }

  isEmailValid(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!target.closest('input') && !target.closest('textarea')) {
      this.activeInput = null;
    }
  }

  async sendMail() {
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);
 
    //senden

    await fetch('https://hosny-fahim.developerakademie.net/send_mail/send_mail.php', 
      {
        method: 'POST',
        body: fd
      }
    );

    // nameField.disabled = false;
    // mailField.disabled = false;
    // messageField.disabled = false;
    // sendButton.disabled = false;

  }
}
