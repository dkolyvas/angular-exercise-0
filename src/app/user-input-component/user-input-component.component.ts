import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputWord } from '../input-word';

@Component({
  selector: 'app-user-input-component',
  templateUrl: './user-input-component.component.html',
  styleUrls: ['./user-input-component.component.css'],
  
 
})
export class UserInputComponentComponent {
  @Output() OnSendWord = new EventEmitter<InputWord>();
  @Output() OnReset = new EventEmitter();

  
  form = new FormGroup({
    inputWord : new FormControl("")
  });

  sendWord(){
    console.log("button clicked");
    this.OnSendWord.emit(this.form.value as InputWord);
  }

  reset(){
    this.OnReset.emit();
  }




}