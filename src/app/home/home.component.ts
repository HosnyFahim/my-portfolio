import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  words: string[] = ['PROGRAMMER </>','FRONTEND DEVELOPER'];
  currentWordIndex: number = 0;
  currentWord: string = '';
  isTyping: boolean = false;

/* The `ngOnInit()` method is a lifecycle hook in Angular that is called after the component has been
initialized. In this case, it is used to call the `animateWords()` method, which sets up an interval
that runs every second. */
  ngOnInit() {
    this.animateWords();
  }

/**
 * This function animates a list of words by typing them out, deleting them, and cycling through the
 * list.
 */
  animateWords() {
    setInterval(() => {
      if (!this.isTyping) {
        this.typeWord(this.words[this.currentWordIndex])
          .then(() => this.delay(2500))
          .then(() => this.deleteWord(this.words[this.currentWordIndex]))
          .then(() => {
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
          });
      }
    }, 100);
  }
  
/**
 * The function delays the execution of code for a specified number of milliseconds using a Promise.
 * @param {number} ms - The "ms" parameter is a number representing the duration of the delay in
 * milliseconds. The function returns a Promise that resolves after the specified delay.
 * @returns A Promise that resolves to void (i.e., nothing) after a specified delay in milliseconds.
 */
  delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

/**
 * This function types out a given word letter by letter with a delay of 100ms between each letter.
 * @param {string} word - A string representing the word that needs to be typed out.
 * @returns A Promise that resolves with void (i.e., nothing) when the typing animation is complete.
 */
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
      }, 70);
    });
  }

/* The `deleteWord()` function is a method in the `HomeComponent` class that deletes a given word
letter by letter with a delay of 100ms between each letter. It takes in a string parameter `word`
representing the word that needs to be deleted. */
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
      }, 20);
    });
  }

  
}
