import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item">
      <h1>{{title}}</h1>
    </div>
  `,
  styles: [
    `
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class ListItemComponent {

  @Input() title = '';

}
