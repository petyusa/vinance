import { Transaction } from './transaction';
import { Account } from './account';
import { IncomeCategory } from './incomeCategory';

export class Income extends Transaction {
  constructor(
    id: string,
    date: Date,
    amount: number,
    comment: string,
    to: string,
    category: string
  ) {
    super(id, date, amount, comment);
    this.to = to;
    this.category = category;
  }

  to: string;
  category: string;
}
