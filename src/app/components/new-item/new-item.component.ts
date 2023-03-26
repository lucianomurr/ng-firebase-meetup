import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div>
        <label for="search">Search for stuff</label>
        <input
          id="search"
          [formControl]="myMessageInput"
          type="search"
          placeholder="add your note..."
          autofocus
          required
        />
        <button type="submit" (click)="onClickGo()">Go</button>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        position: relative;
      }
      .container .div{
        position: relative;

      }
    `,
  ],
})
export class NewItemComponent {

  @Output() message = new EventEmitter<string>();

  myMessageInput = new FormControl();

  onClickGo(){
    if(this.myMessageInput.value)
      this.message.emit(this.myMessageInput.value)
  }

}
