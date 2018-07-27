import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { Transfer } from '../models/models';

@Injectable()
export class TransferService {
  transferToEdit: Observable<Transfer>;
  transfers: Observable<Transfer[]>;
  collection: AngularFirestoreCollection<Transfer>;
  private collectionPath = 'transfers';

  constructor(private aft: AngularFirestore) {
    this.init();
  }

  get(id: string): Observable<Transfer> {
    return this.aft
      .collection(this.collectionPath)
      .doc<Transfer>(id)
      .valueChanges();
  }

  add(transferToAdd: Transfer): void {
    transferToAdd.id = this.aft.createId();
    this.aft
      .collection<Transfer>(this.collectionPath)
      .doc(transferToAdd.id)
      .set({ ...transferToAdd });
  }

  edit(transferToEdit: Transfer): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Transfer>(transferToEdit.id)
      .update({ ...transferToEdit });
  }

  delete(id: string): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Transfer>(id)
      .delete();
  }

  private init(): void {
    this.transfers = this.aft
      .collection<Transfer>(this.collectionPath, (ref) => ref.orderBy('date'))
      .valueChanges();
  }
}
