import { Transaction } from './transaction';

export class Income extends Transaction {
  constructor(
    id: string,
    date: any,
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
