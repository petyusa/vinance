import { Transaction } from './transaction';
import { Account } from './account';

export class Transfer extends Transaction {
  constructor(date: Date, amount: number, comment: string, from: Account, to: Account) {
    super(date, amount, comment);
    this.from = from;
    this.to = to;
  }

  from: Account;
  to: Account;
}
