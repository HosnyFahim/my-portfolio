import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.scss']
})
export class ConctactComponent {
  activeInput: string | null = ''; // Variable zum Speichern des aktiven Eingabefelds

  highlightInput(input: string) {
    this.activeInput = input;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!target.closest('input') && !target.closest('textarea')) {
      this.activeInput = null;
    }
  }
}
