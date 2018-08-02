import { Injectable } from '@angular/core';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Observable, Subject } from 'rxjs';

import { CostCategory } from '../models/costCategory';

@Injectable({
  providedIn: 'root'
})
export class CostCategoryService {
  costsChanged = new Subject<CostCategory[]>();
  costCategories: Observable<CostCategory[]>;
  private collectionPath = 'cost-categories';

  constructor(private afs: AngularFirestore) {
    this.costCategories = this.afs
      .collection<CostCategory>(this.collectionPath, (ref) =>
        ref.orderBy('normalizedName')
      )
      .valueChanges();
  }

  refreshCosts() {
    this.afs
      .collection<CostCategory>(this.collectionPath, (ref) =>
        ref.orderBy('normalizedName')
      )
      .valueChanges()
      .subscribe((costs) => {
        this.costsChanged.next(costs);
      });
  }

  add(coca: CostCategory) {
    const id = this.afs.createId();
    coca.id = id;
    coca.normalizedName = coca.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    this.afs
      .collection<CostCategory>(this.collectionPath)
      .doc<CostCategory>(id)
      .set({ ...coca });
  }

  edit(coca: CostCategory) {
    this.afs
      .collection<CostCategory>(this.collectionPath)
      .doc<CostCategory>(coca.id)
      .update({ ...coca });
  }

  delete(id: string) {
    this.afs
      .collection<CostCategory>(this.collectionPath)
      .doc<CostCategory>(id)
      .delete();
  }
}
