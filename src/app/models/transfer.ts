import { Transaction } from './transaction';
import { Account } from './account';
import { TransferCategory } from './transferCategory';

export class Transfer extends Transaction {
  constructor(
    date: Date,
    amount: number,
    comment: string,
    from: Account,
    to: Account,
    category: TransferCategory
  ) {
    super(date, amount, comment);
    this.from = from;
    this.to = to;
    this.category = category;
  }

  from: Account;
  to: Account;
  category: TransferCategory;
}
