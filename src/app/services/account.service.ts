import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';

import { Account } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  accountsChanged = new Subject<Account[]>();
  account$: Observable<Account>;
  accounts$: Observable<Account[]>;
  private collectionPath = 'accounts';

  constructor(private afs: AngularFirestore) {
    this.accounts$ = this.afs
      .collection<Account>(this.collectionPath, (ref) => ref.orderBy('normalizedName'))
      .valueChanges();
  }

  get(id: string): Observable<Account> {
    return this.afs
      .collection<Account>(this.collectionPath)
      .doc<Account>(id)
      .valueChanges();
  }

  refreshAccounts() {
    this.afs
      .collection<Account>(this.collectionPath, (ref) => ref.orderBy('normalizedName'))
      .valueChanges()
      .subscribe((accounts) => {
        this.accountsChanged.next(accounts);
      });
  }

  add(acc: Account): void {
    acc.id = this.afs.createId();
    acc.normalizedName = acc.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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
