import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent {
  isSending = false;
  @ViewChild('myForm', { static: true }) myForm!: NgForm;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  // Die folgenden Variablen verfolgen den Zustand der Input-Felder und des Buttons
  activeInput: string = '';
  nameInputValue: string = '';
  emailInputValue: string = '';
  messageInputValue: string = '';

  constructor(private renderer: Renderer2) {}

  highlightInput(input: string) {
    this.activeInput = input;
  }

  unhighlightInput() {
    this.activeInput = '';
  }

  isEmailValid(email: string) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  async sendMail() {
    this.isSending = true; // Setzen Sie isSending auf true, um die Animation zu starten

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

    try {
      this.isSending = true;
      await fetch('https://hosny-fahim.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      // Nachdem die E-Mail gesendet wurde, zeigen Sie den Text "Danke :)" im Button an
      this.renderer.setProperty(this.sendButton.nativeElement, 'innerText', 'Danke :)');

      // Warten Sie 2 Sekunden und setzen Sie dann den Text des Buttons auf "Send" zurück und setzen Sie die Formulardaten zurück
      setTimeout(() => {
        this.renderer.setProperty(this.sendButton.nativeElement, 'innerText', 'Send');
        this.isSending = false; // Setzen Sie isSending auf false, um die Animation zu beenden
        nameField.disabled = false;
        mailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;
        this.myForm.reset();
      }, 2000);
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      // Wenn ein Fehler beim Senden der E-Mail auftritt, setzen Sie isSending auf false, um die Animation zu beenden
      this.isSending = false;
    }
  }
}