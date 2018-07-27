import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import { Income } from '../models/models';

@Injectable()
export class IncomeService {
  incomes: Observable<Income[]>;
  private collectionPath = 'incomes';

  constructor(private aft: AngularFirestore) {
    this.init();
  }

  get(id: string): Observable<Income> {
    return this.aft
      .collection<Income>(this.collectionPath)
      .doc<Income>(id)
      .valueChanges();
  }

  add(incomeToAdd: Income): void {
    incomeToAdd.id = this.aft.createId();
    this.aft
      .collection<Income>(this.collectionPath)
      .doc(incomeToAdd.id)
      .set({ ...incomeToAdd });
  }

  edit(incomeToEdit: Income): void {
    this.aft
      .collection<Income>(this.collectionPath)
      .doc<Income>(incomeToEdit.id)
      .update({ ...incomeToEdit });
  }

  delete(id: string): void {
    this.aft
      .collection<Income>(this.collectionPath)
      .doc<Income>(id)
      .delete();
  }

  private init(): void {
    this.incomes = this.aft
      .collection<Income>(this.collectionPath, (ref) => ref.orderBy('date'))
      .valueChanges();
  }
}
