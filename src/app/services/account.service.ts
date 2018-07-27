import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account: Observable<Account>;
  accounts: Observable<Account[]>;
  private collectionPath = 'accounts';

  constructor(private afs: AngularFirestore) {
    this.accounts = this.afs.collection<Account>(this.collectionPath).valueChanges();
  }

  get(id: string): Observable<Account> {
    return this.afs
      .collection<Account>(this.collectionPath)
      .doc<Account>(id)
      .valueChanges();
  }

  add(acc: Account): void {
    this.afs
      .collection<Account>(this.collectionPath)
      .doc<Account>(acc.id)
      .set({ ...acc });
  }

  edit(acc: Account): void {
    this.afs
      .collection<Account>(this.collectionPath)
      .doc<Account>(acc.id)
      .update({ ...acc });
  }

  delete(id: string): void {
    this.afs
      .collection<Account>(this.collectionPath)
      .doc<Account>(id)
      .delete();
  }
}
