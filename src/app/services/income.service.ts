import { Injectable } from '@angular/core';
import { Income } from '../models/models';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '../../../node_modules/angularfire2/firestore';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class IncomeService {
  items: Observable<Income[]>;
  collection: AngularFirestoreCollection<Income>;

  constructor(private aft: AngularFirestore) {
    this.init();
  }

  init() {
    this.items = this.aft.collection<Income>('income').valueChanges();
    console.log(this.items);
  }

  addIncome(incomeToAdd: Income) {
    incomeToAdd.id = this.aft.createId();
    this.aft
      .collection<Income>('income')
      .doc(incomeToAdd.id)
      .set({
        id: incomeToAdd.id,
        date: incomeToAdd.date,
        amount: incomeToAdd.amount,
        to: incomeToAdd.to,
        comment: incomeToAdd.comment,
        category: incomeToAdd.category
      });
  }

  getIncome(id: string) {}

  getIncomes() {}

  editIncome(incomeToEdit: Income) {}

  deleteIncome(id: string) {}
}
