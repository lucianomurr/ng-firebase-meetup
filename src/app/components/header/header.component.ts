import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="blurry-filter"></div>
    <header>
      <div>
        <article id="title">
          <span class="parent">Angular</span><br /><span class="name"
            >Roma</span
          >
        </article>
      </div>
    </header>
  `,
  styles: [
    `
      #blurry-filter {
        width: 100%;
        height: 9rem;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100' height='100' style='filter:url(%23f)' opacity='.2'/%3E%3C/svg%3E");
        mask: linear-gradient(black 7rem, transparent);
        -webkit-mask: linear-gradient(black 7rem, transparent);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        pointer-events: none;
        touch-action: none;
      }
      header {
        width: 100%;
        height: 8rem;
        position: sticky;
        top: 0;
        z-index: 1;
      }
      header > div {
        width: calc(100% - 3rem);
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }
      #title {
        width: 100%;
      }
      #title .parent {
        line-height: 1em;
        color: #666;
      }
      #title .name {
        font-size: 2em;
        font-weight: bold;
        color: #333;
        mix-blend-mode: difference;
      }
    `,
  ],
})
export class HeaderComponent {}
