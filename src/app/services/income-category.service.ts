import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { IncomeCategory } from '../models/models';

@Injectable()
export class IncomeCategoryService {
  private collectionPath = 'incomeCategories';

  constructor(private afs: AngularFirestore) {}

  add(inCat: IncomeCategory) {
    const id = this.afs.createId();
    inCat.id = id;
    this.afs
      .collection<IncomeCategory>(this.collectionPath)
      .doc<IncomeCategory>(id)
      .set(inCat);
  }
}
