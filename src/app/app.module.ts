import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInputComponentComponent } from './user-input-component/user-input-component.component';
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponentComponent,
    EvenLengthWordsComponent,
    OddLengthWordsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
