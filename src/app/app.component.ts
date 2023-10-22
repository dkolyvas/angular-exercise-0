import { Component } from '@angular/core';
import { InputWord } from './input-word';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angular-exercise-0';
  oddwords:string[] = [];
  evenwords:string[] = [];

  classifyWord(inputword:InputWord){
      let word = inputword.inputWord
      let length = word.length
      console.log("Now testing word" + word)
      if(length % 2 == 0){
        this.evenwords.push(word)
        
      } else{
        this.oddwords.push(word)
      }
  }
  reset(){
    let evenWordsCount = this.evenwords.length;
    let oddWordsCount = this.oddwords.length;
    this.evenwords.splice(0,evenWordsCount);
    this.oddwords.splice(0,oddWordsCount);
  }
}
