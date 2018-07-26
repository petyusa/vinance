import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Income } from '../models/models';

@Injectable()
export class IncomeService {
  incomeToEdit: Observable<Income>;
  incomes: Observable<Income[]>;
  collection: AngularFirestoreCollection<Income>;
  private collectionPath = 'income';

  constructor(private aft: AngularFirestore) {
    this.init();
  }

  getIncome(id: string): Observable<Income> {
    return this.aft
      .collection(this.collectionPath)
      .doc<Income>(id)
      .valueChanges();
  }

  addIncome(incomeToAdd: Income): void {
    incomeToAdd.id = this.aft.createId();
    this.aft
      .collection<Income>(this.collectionPath)
      .doc(incomeToAdd.id)
      .set({ ...incomeToAdd });
  }

  editIncome(incomeToEdit: Income): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Income>(incomeToEdit.id)
      .update({ ...incomeToEdit });
  }

  deleteIncome(id: string): void {
    this.aft
      .collection(this.collectionPath)
      .doc<Income>(id)
      .delete();
  }

  private init(): void {
    this.incomes = this.aft
      .collection<Income>(this.collectionPath, (ref) => ref.orderBy('date'))
      .valueChanges();
  }
}
