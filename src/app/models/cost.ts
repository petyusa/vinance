import { Transaction } from './transaction';
import { Account } from './account';
import { CostCategory } from './costCategory';

export class Cost extends Transaction {
  constructor(date: Date, amount: number, comment: string, from: Account, category: CostCategory) {
    super(date, amount, comment);
    this.from = from;
    this.category = category;
  }

  from: Account;
  category: CostCategory;
}
