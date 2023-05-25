import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  words: string[] = ['Web Designer', 'Frontend Developer'];
  currentWordIndex: number = 0;
  currentWord: string = '';
  isTyping: boolean = false;

  ngOnInit() {
    this.animateWords();
  }

  animateWords() {
    setInterval(() => {
      if (!this.isTyping) {
        this.typeWord(this.words[this.currentWordIndex])
          .then(() => this.deleteWord(this.words[this.currentWordIndex]))
          .then(() => {
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
          });
      }
    }, 1500);
  }

  typeWord(word: string): Promise<void> {
    this.isTyping = true;
    return new Promise<void>((resolve) => {
      let i = 0;
      const intervalId = setInterval(() => {
        this.currentWord = word.slice(0, i);
        i++;
        if (i > word.length) {
          clearInterval(intervalId);
          resolve();
        }
      }, 200);
    });
  }

  deleteWord(word: string): Promise<void> {
    return new Promise<void>((resolve) => {
      let i = word.length;
      const intervalId = setInterval(() => {
        this.currentWord = word.slice(0, i);
        i--;
        if (i < 0) {
          clearInterval(intervalId);
          resolve();
          this.isTyping = false;
        }
      }, 100);
    });
  }
}
