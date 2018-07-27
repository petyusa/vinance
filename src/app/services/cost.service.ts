import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Cost } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CostService {
  costs: Observable<Cost[]>;
  private collectionPath = 'costs';

  constructor(private aft: AngularFirestore) {
    this.init();
  }

  get(id: string): Observable<Cost> {
    return this.aft
      .collection(this.collectionPath)
      .doc<Cost>(id)
      .valueChanges();
  }

  add(costToAdd: Cost): void {
    costToAdd.id = this.aft.createId();
    this.aft
      .collection<Cost>(this.collectionPath)
      .doc(costToAdd.id)
      .set({ ...costToAdd });
  }

  edit(costToEdit: Cost): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Cost>(costToEdit.id)
      .update({ ...costToEdit });
  }

  delete(id: string): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Cost>(id)
      .delete();
  }

  private init(): void {
    this.costs = this.aft
      .collection<Cost>(this.collectionPath, (ref) => ref.orderBy('date'))
      .valueChanges();
  }
}
