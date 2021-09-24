import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference} from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private itemsCollection!: AngularFirestoreCollection<Item>;
  items!: Observable<Item[]>;
  isCollapsed : boolean = true;
  isCollapsedTwo : boolean = true;
  // name!: string;
  // descriptionDish!: string;




  constructor(private readonly afs: AngularFirestore,
    private db: AngularFireDatabase
    ) {
      this.itemsCollection = afs.collection<Item>('Recipes');
      this.items = this.itemsCollection.valueChanges({ idField: 'id' });
  }

  addItem(name: string) {
    const id = this.afs.createId();
    const item: Item = { id, name };
    this.itemsCollection.doc(id).set(item);
  }




  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleCollapseTwo(){
    this.isCollapsedTwo = !this.isCollapsedTwo;
  }

}
