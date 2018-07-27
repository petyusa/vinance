import { Transaction } from './transaction';

export class Transfer extends Transaction {
  constructor(
    id: string,
    date: any,
    amount: number,
    comment: string,
    from: string,
    to: string,
    category: string
  ) {
    super(id, date, amount, comment);
    this.from = from;
    this.to = to;
    this.category = category;
  }

  from: string;
  to: string;
  category: string;
}
