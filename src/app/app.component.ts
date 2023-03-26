import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NewItemComponent } from './components/new-item/new-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HeaderComponent } from './components/header/header.component';

import { Firestore, collectionData, collection, DocumentData, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc } from '@firebase/firestore';

interface Item {
  comment: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>

    <main>
      <app-new-item (message)="onNewMessageComing($event)"></app-new-item>
      <li *ngFor="let item of item$ | async">
        <app-list-item [title]="item.comment"></app-list-item>
      </li>
    </main>
  `,
  styles: [`
    li{
      list-style:none;
      border-bottom: 1px solid grey;
    }
  `],
  imports: [CommonModule, NewItemComponent, ListItemComponent, HeaderComponent],
})
export class AppComponent {

  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);
  itemCollection: CollectionReference;

  constructor(){
    this.itemCollection = collection(this.firestore, 'comments');
    this.item$ = collectionData(this.itemCollection) as unknown as Observable<Item[]>;
  }

  onNewMessageComing(message: string){
    const item: Item = {
      comment: message
    };
    addDoc(this.itemCollection, item);
  }

}
