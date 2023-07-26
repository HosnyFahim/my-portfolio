import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent {
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
}
