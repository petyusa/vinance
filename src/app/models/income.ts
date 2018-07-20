import { Transaction } from './transaction';
import { Account } from './account';
import { IncomeCategory } from './incomeCategory';

export class Income extends Transaction {
  constructor(date: Date, amount: number, comment: string, to: Account, category: IncomeCategory) {
    super(date, amount, comment);
    this.to = to;
    this.category = category;
  }

  to: Account;
  category: IncomeCategory;
}
